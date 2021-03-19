import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Hyperink from '../../../../components/Hyperlink';

import { styles } from './styles';

export default class CookiesAndLocalStoragePolicy extends Component {
  render() {
    return (
      <View>
        <Text style={styles.header}>COOKIES POLICY</Text>
        <Text style={styles.text}>
          We understand that your privacy is important to you and are committed
          to being transparent about the technologies we use. In the spirit of
          transparency, this policy provides detailed information about how and
          when we use cookies on our Site.
        </Text>

        {/* Use of Cookies */}
        <Text>
          <Text style={styles.title}>1- Use of Cookies. </Text>
          <Text style={styles.p}>
            In order to ensure that every user of our Platform hereinafter
            referred to as Site do have and enjoy the best possible user
            experience, we and our marketing team, associates, analytics and/or
            service providers use cookies, web beacons, and other technological
            means to ensure that.
          </Text>
        </Text>

        <Text style={styles.text}>
          A cookie (“Cookie”) is a small piece of text file or data retrieved
          from a website and stored on your device by a web page server while
          accessing such platforms.
        </Text>
        <Text style={styles.text}>
          Cookies are built as a system mechanism to recollect or remember data
          that can later be read by a web server in the domain that issued the
          cookie to you. Such information stored would include browsing
          activity, log-in tasks and visited pages. Some cookies are regularly
          used while others are only used when you select certain preferences or
          activate certain browser features.
        </Text>
        <Text style={styles.text}>
          You can view our cookie list below to find out more about each cookie.
          We do update this list periodically, so from time to time, there may
          be additional cookies that are not yet listed. To help us deliver
          cookies, count visits, understand usage, monitor effectiveness and
          ascertain whether an email has been seen and acted upon, web beacons,
          tags and scripts may be used in the Site or on the emails. We may also
          receive reports based on usage of these technologies by our
          service/analytics providers on an individual and aggregated basis.
        </Text>

        {/* Disabling Cookies */}
        <Text>
          <Text style={styles.title}>2- Disabling Cookies. </Text>
          <Text style={styles.p}>
            You can generally activate or deactivate the use of cookies via the
            settings or functionality of your web browser. Note that some third
            party advertising systems, including Google, provide customization
            preferences associated with internet browsing and allow users to opt
            out at any point in time. To get more information about this
            feature, login to Google and use the following link:
            {' '}
            <Hyperink
              text="https://adssettings.google.com/u/0/authenticated?hl=en"
              style={{ fontSize: 17 }}
            />
          </Text>
        </Text>

        <Text style={styles.text}>
          In some cases, we may link the information accumulated by Cookies with
          other data we collect from you pursuant to this Privacy Policy and use
          the combined information as set forth herein. When you decline the use
          of Cookies, some functionalities on the website may be unavailable. If
          those services are unavailable, the Site may function poorly.
        </Text>
        <Text style={styles.text}>
          Third parties who serve cookies on our Site may link some of your
          data. For example, your name and email address may be linked to other
          information. That information can include past purchases and data
          related to your general online presence. You have specific rights that
          are explained above under the header “Notice to EU Data Subjects”,
          including the right to inspect, edit or delete any data collected if
          you are resident within the European Economic Area.
        </Text>

        {/* Cookies Justification */}
        <Text>
          <Text style={styles.title}>3- Cookies Justification. </Text>
          <Text style={styles.p}>We use Cookies for the following:</Text>
        </Text>
        <View style={styles.list}>
          <Text style={styles.p}>
            1. It helps us optimize our platform and serve you better by
            recognizing you as a recent customer and suggesting ways to help you
            get along on the Site.
          </Text>
          <Text style={styles.p}>
            2. It helps us incorporate with third party social media platforms
            and serve your interests with targeted advertising.
          </Text>
          <Text style={styles.p}>
            3. It helps us retain password for your convenience to avoid the
            hassle of multiple logins, where you have already registered on our
            Site.
          </Text>
          <Text style={styles.p}>
            4. It helps us improve our Site and tailor our priorities to better
            understand your visits on our platforms and it helps to indicate
            your presence on our Site.
          </Text>
          <Text style={styles.p}>
            5. It helps us notice the conduct, browsing patterns, and activities
            of our users over time across multiple websites and platforms.
          </Text>
          <Text style={styles.p}>
            6. It helps us understand the needs and market interests of our
            customers as well as our website visitors.
          </Text>
        </View>

        <Text style={styles.text}>
          Some Cookies are necessary for certain functionalities of the Site,
          without which we would not be able to provide as many services that
          you need to properly benefit from the Site. These Cookies, for
          example, enable us to operate our Site so you can access it on
          request. Furthermore, it lets us recognize the fact that you have
          created an account and have also logged into that account to access
          Site contents. They also include Cookies that enable us to remember
          your previous actions within the same browsing session and secure our
          Sites to always keep our products and customers adequately protected.
        </Text>
        <Text style={styles.text}>
          Fanwally uses cookies so that the Site operates smoothly. Otherwise,
          every time you access a new page it would require a reloading period
          that is quite inefficient. Session cookies remain for the short
          duration of your visit to our Site while persistent cookies remain for
          your next and future visits. Cookies allow your browser to recall your
          user preferences, to remember a page, and to upload it immediately
          rather than treating it as new information each time. Cookies also
          allow us to understand and analyze how people use our site for
          marketing and advertising purposes, and to make improvements. To
          succeed as a business we must know which adverts, search engines,
          websites, products and search keywords are effective in generating new
          users for us. In some cases, third parties may share cookies with us
          and the Cookies will remain for up to two years, such as with Google
          Analytics, unless cleared or disabled by you.
        </Text>

        <Text style={[styles.header, styles.marginBottom]}>
          LOCAL STORAGE POLICY
        </Text>
        {/* Local Storage */}
        <Text>
          <Text style={styles.title}>1- Local Storage. </Text>
          <Text style={styles.p}>
            Local Storage, including Javascript-enabled localStorage, is a
            typical way for a website to store a small file of letters and
            numbers in your browser. We use Local Storage to assign you a unique
            user ID for the purpose of communication. Local Storage is deleted
            when the website that stored them deletes them. You can also delete
            Local Storage from your browser at any time you like by visiting
            your web browser settings, or by the following methods:
          </Text>
        </Text>

        <View style={styles.list}>
          <Text style={styles.p}>
            1. In Firefox, localStorage is cleared when the following conditions
            are met: (i) user clears recent history, (ii) cookies are selected
            to be cleared, and (iii) time range is “Everything.”
          </Text>
          <Text style={styles.p}>
            2. In Chrome, localStorage is cleared when the following conditions
            are met: (i) clear browsing data, (ii) &quot;cookies and other site
            data&quot; is selected, and (iii) time frame is “from beginning of
            time.” In Chrome, it is also now possible to delete localStorage for
            one specific site.
          </Text>
          <Text style={styles.p}>
            3. In Explorer, to clear localStorage: (i) click on Tools--Internet
            Options, (ii) General tab, (iii) delete browsing history on exit,
            (iv) ensure “Cookies and website data” (or “temporary internet files
            and website files”) is selected, and (v) consider unchecking
            &quot;Preserve Favorites website data&quot; at the top.
          </Text>
          <Text style={styles.p}>
            4. In Safari, (i) Click Safari, (ii) Preferences, (iii) Select the
            Privacy tab, (iv) Click Remove all website data and (v) Click Remove
            Now.
          </Text>
        </View>
      </View>
    );
  }
}
