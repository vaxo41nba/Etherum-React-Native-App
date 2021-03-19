import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Hyperink from '../../../../components/Hyperlink';

import { styles } from './styles';

export default class TheDataWeCollect extends Component {
  render() {
    return (
      <View>
        <Text style={styles.header}>THE DATA WE COLLECT</Text>
        <Text style={styles.text}>
          Fanclear values and respects the privacy of its Users. We manage and
          control your personal data for a range of reasons, from understanding
          how our Users engage with our Services to informing our marketing and
          advertising. We use this information to administer the Services and we
          analyze this information to improve the Services by tailoring its
          features and functionality to our Users’ needs and preferences.
        </Text>
        <Text style={styles.text}>
          We process certain amounts of sensitive data while carrying out
          identity verification, where such processing is necessary for reasons
          of substantial public interest by virtue of the provisions of article
          9(2)(g) of the GDPR and provision 14, Part 2, Schedule 1 of the DPA
          2018.
        </Text>

        {/* Information you provide */}
        <Text>
          <Text style={styles.title}>1- Information you provide. </Text>
          <Text style={styles.p}>
            We collect a variety of information that you provide directly to us.
            Data we collect from you includes:
          </Text>
        </Text>
        <View style={styles.list}>
          <Text style={styles.p}>1. Your contact information;</Text>
          <Text style={styles.p}>
            2. Your network information to process transactions;
          </Text>
          <Text style={styles.p}>
            3. Your communications and dealings with us;
          </Text>
          <Text style={styles.p}>
            4. Your participation in Fanclear surveys or research studies;
          </Text>
          <Text style={styles.p}>
            5. Your requests for customer support and technical assistance;
          </Text>
          <Text style={styles.p}>
            6. Your information and behaviors concerning your use the Service;
          </Text>
          <Text style={styles.p}>7. Marketing information;</Text>
        </View>

        <Text style={styles.text}>
          You may access information that you have voluntarily provided through
          your account on the Services at any point in time. If you wish to
          review, correct, alter or delete it, you can send a request to
          support@fanclear.com
        </Text>

        {/* Information we get from other sources */}
        <Text style={styles.marginBottom}>
          <Text style={styles.title}>
            2- Information we get from other sources.
          </Text>
          <Text style={styles.p}>
            We may get your personal data from other third party sources as add
            on from your access to the services we provide. Our Site may include
            social media features, for example, the Facebook widgets, such as
            the “share this” and “like” buttons. These widgets may collect your
            personal data. Please note that your interactions with these
            features are subject to the privacy policy of the company that
            provides such functionality.
          </Text>
        </Text>

        {/* Log Data */}
        <Text>
          <Text style={styles.title}>3- Log Data.</Text>
          <Text style={styles.p}>
            We may automatically record certain information about how you use
            our Site. Information we automatically record may include:
          </Text>
        </Text>
        <View style={styles.list}>
          <Text style={styles.p}>
            1. User’s Internet Protocol (IP) address;
          </Text>
          <Text style={styles.p}>
            2. User’s device, browser type, and operating system;
          </Text>
          <Text style={styles.p}>3. Cookies and local storage;</Text>
          <Text style={styles.p}>
            4. The pages or features of our Site accessed by a User, the time
            spent on those pages or features, search terms, and other
            statistics;
          </Text>
        </View>

        <Text style={styles.text}>
          Regular cookies may be disabled by selecting certain settings in most
          commercial browsers. For more information, please see the “Cookies
          Policy” and “Local Storage Policy” sections below.
        </Text>
        <Text style={styles.marginBottom}>
          <Text style={styles.text}>
            We also use Google Analytics to optimize the user experience on our
            platform. Google Analytics is a web analytics service to track and
            report website traffic. This data is shared with other Google
            services. You can opt-out of having made your activity on the
            Service available to Google Analytics by installing the Google
            Analytics opt-out browser add-on. You can find more information
            about its use of your personal data here:
            {' '}
          </Text>
          <Hyperink
            text="https://policies.google.com/privacy?hl=en"
            style={styles.link}
          />
        </Text>

        {/* Information we will never collect */}
        <Text>
          <Text style={styles.title}>
            4- Information we will never collect.
          </Text>
          <Text style={styles.p}>
            We will never ask you to share your private keys or wallet seed.
            Never trust anyone or any site that asks you to enter your private
            keys or wallet seed.
          </Text>
        </Text>
      </View>
    );
  }
}
