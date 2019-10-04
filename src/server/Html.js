/* eslint react/no-danger:0 */
import React, { Component, PropTypes } from 'react'
import { Provider } from 'react-redux'
import { RouterContext } from 'react-router'
import { renderToString } from 'react-dom-stream/server'
import { basename } from '../universal/utils/basename'

const loadTypeKit = '(function(d){var config={kitId:\'iuu3nad\',scriptTimeout:3000,async:true},h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/wf-loading/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src=\'https://use.typekit.net/\'+config.kitId+\'.js\';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config);}catch(e){}};s.parentNode.insertBefore(tk,s);})(document);'
const hideFOUT = '.wf-loading .loader-container { display: block !important; }'
const facebookPixel = '!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version=\'2.0\';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,\'script\',\'https://connect.facebook.net/en_US/fbevents.js\');fbq(\'init\', \'1625087084377195\');fbq(\'track\', "PageView");'
const twitterPixel = '!function(e,n,a,r){e.twq||(r=e.twq=function(){r.exe?r.exe.apply(r,arguments):r.queue.push(arguments)},r.version="1",r.queue=[],t=n.createElement(a),t.async=!0,t.src="//static.ads-twitter.com/uwt.js",s=n.getElementsByTagName(a)[0],s.parentNode.insertBefore(t,s))}(window,document,"script"),twq("init","nupxr"),twq("track","PageView");'
const googleTagManager = '(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({"gtm.start":new Date().getTime(),event:"gtm.js"});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!="dataLayer"?"&l="+l:"";j.async=true;j.src="https://www.googletagmanager.com/gtm.js?id="+i+dl;f.parentNode.insertBefore(j,f);})(window,document,"script","dataLayer","GTM-M7449C");'
const mixpanel = '(function(e,b){if(!b.__SV){var a,f,i,g;window.mixpanel=b;b._i=[];b.init=function(a,e,d){function f(b,h){var a=h.split(".");2==a.length&&(b=b[a[0]],h=a[1]);b[h]=function(){b.push([h].concat(Array.prototype.slice.call(arguments,0)))}}var c=b;"undefined"!==typeof d?c=b[d]=[]:d="mixpanel";c.people=c.people||[];c.toString=function(b){var a="mixpanel";"mixpanel"!==d&&(a+="."+d);b||(a+=" (stub)");return a};c.people.toString=function(){return c.toString(1)+".people (stub)"};i="disable time_event track track_pageview track_links track_forms register register_once alias unregister identify name_tag set_config people.set people.set_once people.increment people.append people.union people.track_charge people.clear_charges people.delete_user".split(" ");for(g=0;g<i.length;g++)f(c,i[g]);b._i.push([a,e,d])};b.__SV=1.2;a=e.createElement("script");a.type="text/javascript";a.async=!0;a.src="undefined"!==typeof MIXPANEL_CUSTOM_LIB_URL?MIXPANEL_CUSTOM_LIB_URL:"file:"===e.location.protocol&&"//cdn.mxpnl.com/libs/mixpanel-2-latest.min.js".match(/^\\/\\//)?"https://cdn.mxpnl.com/libs/mixpanel-2-latest.min.js":"//cdn.mxpnl.com/libs/mixpanel-2-latest.min.js";f=e.getElementsByTagName("script")[0];f.parentNode.insertBefore(a,f)}})(document,window.mixpanel||[]);mixpanel.init("881f5fdf6e88b3759d04d06a9cd124c4");'
const adroll = 'adroll_adv_id = "ELU5DSQISBHPLMBWT3YWDT";adroll_pix_id = "GEBXIUYXZJAL5BANND7TD7";(function () {var _onload = function () {if (document.readyState && !/loaded|complete/.test(document.readyState)) {setTimeout(_onload, 10);return}if (!window.__adroll_loaded) {__adroll_loaded = true;setTimeout(_onload, 50);return}var scr = document.createElement("script");var host = (("https:" == document.location.protocol) ? "https://s.adroll.com" : "http://a.adroll.com");scr.setAttribute(\'async\', \'true\');scr.type = "text/javascript";scr.src = host + "/j/roundtrip.js";((document.getElementsByTagName(\'head\') || [null])[0] ||document.getElementsByTagName(\'script\')[0].parentNode).appendChild(scr);};if (window.addEventListener) {window.addEventListener(\'load\', _onload, false);} else {window.attachEvent(\'onload\', _onload)}}());'
const wistiaiFrameShim = 'window.wistiaIframeShim = false'

// Injects the server rendered state and app into a basic html template
export default class Html extends Component {
  static propTypes = {
    store: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    assets: PropTypes.object,
    renderProps: PropTypes.object,
  }

  render() {
    const PROD = process.env.NODE_ENV === 'production'
    const { title, store, assets, renderProps } = this.props
    const { manifest, app, vendor } = assets || {}
    const initialState = `window.__INITIAL_STATE__ = ${JSON.stringify(store.getState())}`
    const root = PROD && renderToString(
      <Provider store={store}>
        <RouterContext {...renderProps} />
      </Provider>)

    const basePath = basename ? `/${basename}` : ''
    const stylePath = `${basePath}/static/prerender.css`

    return (
      <html>
        <head>

          <style>{hideFOUT}</style>

          <script dangerouslySetInnerHTML={{ __html: loadTypeKit }} />
          <script dangerouslySetInnerHTML={{ __html: facebookPixel }} />
          <script dangerouslySetInnerHTML={{ __html: twitterPixel }} />
          <script dangerouslySetInnerHTML={{ __html: googleTagManager }} />
          <script dangerouslySetInnerHTML={{ __html: mixpanel }} />
          <script dangerouslySetInnerHTML={{ __html: adroll }} />

          <link rel='apple-touch-icon' sizes='57x57' href='https://eliteguardtraining.com/favicon/apple-icon-57x57.png' />
          <link rel='apple-touch-icon' sizes='60x60' href='https://eliteguardtraining.com/favicon/apple-icon-60x60.png' />
          <link rel='apple-touch-icon' sizes='72x72' href='https://eliteguardtraining.com/favicon/apple-icon-72x72.png' />
          <link rel='apple-touch-icon' sizes='76x76' href='https://eliteguardtraining.com/favicon/apple-icon-76x76.png' />
          <link rel='apple-touch-icon' sizes='114x114' href='https://eliteguardtraining.com/favicon/apple-icon-114x114.png' />
          <link rel='apple-touch-icon' sizes='120x120' href='https://eliteguardtraining.com/favicon/apple-icon-120x120.png' />
          <link rel='apple-touch-icon' sizes='144x144' href='https://eliteguardtraining.com/favicon/apple-icon-144x144.png' />
          <link rel='apple-touch-icon' sizes='152x152' href='https://eliteguardtraining.com/favicon/apple-icon-152x152.png' />
          <link rel='apple-touch-icon' sizes='180x180' href='https://eliteguardtraining.com/favicon/apple-icon-180x180.png' />
          <link rel='icon' type='image/png' sizes='192x192' href='https://eliteguardtraining.com/favicon/android-icon-192x192.png' />
          <link rel='icon' type='image/png' sizes='32x32' href='https://eliteguardtraining.com/favicon/favicon-32x32.png' />
          <link rel='icon' type='image/png' sizes='96x96' href='https://eliteguardtraining.com/favicon/favicon-96x96.png' />
          <link rel='icon' type='image/png' sizes='16x16' href='https://eliteguardtraining.com/favicon/favicon-16x16.png' />
          <link rel='manifest' href='https://eliteguardtraining.com/favicon/manifest.json' />
          <meta name='msapplication-TileColor' content='#ffffff' />
          <meta name='msapplication-TileImage' content='https://eliteguardtraining.com/favicon/ms-icon-144x144.png' />
          <meta name='theme-color' content='#ffffff' />

          <meta charSet='utf-8' />
          <meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no' />
          {PROD && <link rel='stylesheet' href={stylePath} type='text/css' />}
          <title>{title}</title>
        </head>
        <body>
          {!this.props.omitJavaScript &&
            <script dangerouslySetInnerHTML={{ __html: initialState }} data-script='initial-state' />
          }
          {PROD ? <div id='root' dangerouslySetInnerHTML={{ __html: root }}></div> : <div id='root'></div>}
          {!this.props.omitJavaScript &&
            <div>
              {PROD && <script dangerouslySetInnerHTML={{ __html: manifest.text }} data-script='manifest' />}
              {PROD && <script src={vendor.js} data-script='vendor' />}
              <script src={PROD ? app.js : '/static/app.js'} data-script='app' />
              <script dangerouslySetInnerHTML={{ __html: wistiaiFrameShim }} />
              <script charSet='ISO-8859-1' src='//fast.wistia.com/assets/external/E-v1.js' async defer data-script='wistia' />
              <script src='//platform.twitter.com/oct.js' type='text/javascript'></script>
            </div>
          }
        </body>
      </html>
    )
  }
}
