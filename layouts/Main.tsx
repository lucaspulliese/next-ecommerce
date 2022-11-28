import Head from 'next/head';
import Header from 'components/header';
import { useRouter } from 'next/router';
import Script from 'next/script'

type LayoutType = {
  title?: string;
  children?: React.ReactNode;
}

export default ({ children, title = 'Next.js Ecommerce' }: LayoutType) => {
  const router = useRouter();
  const pathname = router.pathname;

  return (
    <div className="app-main">
      <Head>
        <title>{ title }</title>

        <Script
          src="https://s3.amazonaws.com/moe-websdk/staging/versions/2.27.115/sdk.webp.js?app_id=KU1MKAGZROCE4NQ1VO0VGJLO&env=sdk-webp-int-2.moestaging.com"
          strategy="beforeInteractive"
          onLoad={() =>
            console.log(`SDK loaded`)
          }
      />

  <Script id="moe-sdk">
    (function (i, s, o, g, r, a, m, n) {
      i.moengage_object = r; t = {}; q = function (f) { return function () { (i.moengage_q = i.moengage_q || []).push({ f: f, a: arguments }) } }; f = ['track_event', 'add_user_attribute', 'add_first_name', 'add_last_name', 'add_email', 'add_mobile', 'add_user_name', 'add_gender', 'add_birthday', 'destroy_session', 'add_unique_user_id', 'moe_events', 'call_web_push', 'track', 'location_type_attribute'], h = { onsite: ["getData", "registerCallback"] }; for (k
        in f) { t[f[k]] = q(f[k]) } for (k in h) for (l in h[k]) { null == t[k] && (t[k] = {}), t[k][h[k][l]] = q(k + "." + h[k][l]) } a = s.createElement(o); m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m); i.moe = i.moe || function () { n = arguments[0]; return t }; a.onload = function () { if (n) { i[r] = moe(n) } }
    })(window, document, 'script', 'https://cdn.moengage.com/webpush/moe_webSdk.min.latest.js', 'Moengage')


    Moengage = moe({
      app_id: "KU1MKAGZROCE4NQ1VO0VGJLO", // change the app ID
      debug_logs: 0
    });
    </Script>
      </Head>
      <Header />

      <main className={(pathname !== '/' ? 'main-page' : '')}>
        { children }
      </main>
    </div>
  )
}