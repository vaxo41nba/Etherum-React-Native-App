import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles';

export default class InherentRisks extends Component {
  render() {
    return (
      <View>
        <Text style={styles.header}>INHERENT RISKS</Text>

        {/* Service Disclaimers */}
        <Text>
          <Text style={styles.title}>1- Service Disclaimers. </Text>
          <Text style={styles.p}>
            You understand and expressly agree that your use of the Service is
            solely at your risk. The Service (including the Service and the
            Content) are provided on an “as is” and “as available” basis,
            without any warranty, either express or implied, including, without
            limitation, implied warranties of merchantability, fitness for
            purpose or non-infringement.
          </Text>
        </Text>

        <Text style={styles.text}>
          You accept that Fanclear has no control over, and no duty to take any
          action regarding which users gain access to or use the Service, the
          impact the Content may have on you, or any actions you may take as a
          result of having been exposed to the Content. You release Fanclear
          from all liability for you having obtained or not obtained Content
          through the Service. Fanclear makes no representations concerning any
          Content contained in or accessed through the Service, and will not be
          liable for the accuracy, copyright compliance, legality or decency of
          material contained in or accessed through the Service. You acknowledge
          that Fanclear is not responsible for transmitting, safeguarding, or
          maintaining your private keys or any digital currency associated
          therewith. If you do lose, mishandle or have stolen associated digital
          currency private keys, you accept that you may not be able to recover
          associated digital currency, and that Fanclear will not in any way be
          responsible for such loss. You acknowledge that Fanclear is not
          responsible for any loss, damage or liability arising from your
          failure to comply with the Terms of Use.
        </Text>

        {/* New Regulations */}
        <Text>
          <Text style={styles.title}>2- New Regulations. </Text>
          <Text style={styles.p}>
            Fanwally, Fanclear, Fanbase, FNBD, FNBE and ETH and any associated
            technologies could be adversely impacted by one or more regulatory
            inquiries or actions, which could impede or limit our ability to
            continue to develop the product. Regulatory actions in your
            jurisdiction could also, possibly, limit your ability to access or
            use the Services and associated blockchains.
          </Text>
        </Text>

        {/* Bad Actors */}
        <Text>
          <Text style={styles.title}>3- Bad Actors. </Text>
          <Text style={styles.p}>
            You understand and accept that blockchain is a progressing field.
            Advances in code cracking or technical advances such as the
            development of quantum computers may present risks to
            cryptocurrencies, cryptography and Services of Content, which could
            possibly result in the theft or loss of your blockchain tokens or
            property. To the extent possible, Fanclear updates the protocol and
            underlying Services to account for any advances in cryptography
            hacking and Fanclear incorporates additional security standards, but
            does not guarantee or otherwise represent full security of the
            system. By using the Service or accessing the Content, you
            acknowledge these inherent risks.
          </Text>
        </Text>

        {/* Digital Asset Price Fluctuations */}
        <Text>
          <Text style={styles.title}>
            4- Digital Asset Price Fluctuations.
            {' '}
          </Text>
          <Text style={styles.p}>
            You understand and acknowledge that Fanwally, Fanbase, Ethereum and
            other blockchain technologies and similar currencies or tokens are
            highly volatile as a result of factors including but not limited to
            the security risks involved, public adoption and technological
            learning curves. You hereby agree that the costs of transacting with
            such technologies are subject to change and may increase at any
            time. These price increases will thereby impact any commercial
            activity taking place on the Fanbase or Ethereum blockchains. You
            acknowledge these risks and represent that Fanclear cannot be held
            liable for such fluctuations or increased costs.
          </Text>
        </Text>

        {/* Application Security */}
        <Text>
          <Text style={styles.title}>5- Application Security. </Text>
          <Text style={styles.p}>
            You do acknowledge and accept that Fanbase and Ethereum applications
            are code and therefore subject to some levels of foibility. You
            acknowledge that you are solely responsible for the evaluation of
            any code provided by the Services as well any Content. You
            understand that the reliability and integrity of smart-contracts,
            third-party websites or products, or other Content you access or use
            through the Service may have weaknesses which are unknown to
            Fanclear. You also clearly represent and understand that Fanbase and
            Ethereum applications can be written maliciously or negligently, and
            that Fanclear does not assume legal responsibility for your
            interaction with such applications which may bring about loss of
            identity, property or biographical information. Fanclear does not
            have an on-going duty to alert you to the potential risks of the
            Service, beyond these Terms of Use.
          </Text>
        </Text>

        {/* Mobile Application */}
        <Text>
          <Text style={styles.title}>6- Mobile Application. </Text>
          <Text style={styles.p}>
            You understand and acknowledge that the App is in public beta and
            still undergoing testing before its official release. As a result,
            the Services provided through the App are not intended to be relied
            on for any other purpose or used in a production environment.
          </Text>
        </Text>

        <Text style={styles.text}>
          You acknowledge and accept that the App or the Services may contain
          bugs, may be subject to technical and/or general errors and defects
          which may impact its functionality or be subject to periods of
          downtime and in certain situations may even be unavailable. Depending
          on the circumstance, such defects may result in partial or complete
          loss or data corruption and as a result the App may be improved,
          enhanced, restructured and/or modified, at any time, including through
          the release of subsequent versions, all with or without notice to you.
          The availability of the App is on an “as is” basis for the exclusive
          purpose of getting feedback on performance, suitability, quality,
          usability, assurance purposes as well as defects.
        </Text>

        {/* Blockchain Systems */}
        <Text>
          <Text style={styles.title}>7- Blockchain Systems. </Text>
          <Text style={styles.p}>
            By making use of the Service or interacting with the Content or
            platform in any way, you represent that you understand the inherent
            risks associated with cryptographic systems and warrant that you
            have an understanding of its usage and the intricacies of native
            cryptographic tokens, like Ether (ETH), Fanbase Dollar (FNBD),
            Fanbase Euro (FNBE) and Bitcoin (BTC), smart contract based tokens
            such as those used by blockchain based software-systems that follow
            Fanbase or Ethereum Standards (located at
            https://github.com/ethereum/EIPs/issues/20). The Fanbase Blockchain
            generally follows Ethereum standards and quality.
          </Text>
        </Text>

        {/* Clearing */}
        <Text>
          <Text style={styles.title}>8- Clearing. </Text>
          <Text style={styles.p}>
            You further acknowledge and accept that the clearing feature on the
            App is experimental in nature as it is interactive, and does rely on
            a third party application, inclusive of the underlying payment
            channel network. You acknowledge and do accept that there are
            potential risks with using Fanclear, including but not limited to
            incapacity to access any digital assets that are connected, keyed
            and/or locked in the smart contract of the payment channel or the
            payment channel itself, which could result from errors in the App,
            communication defects, inaccessibility of the third party network or
            software bugs, the third party application or system or for any
            other reason. You accept and agree that Fanclear is not responsible
            for any loss in your digital assets or delay in accessing your
            digital assets. It is possible that we may round off the highest
            amount of digital assets which you may deposit into our eWallet
            product and we may increase or decrease this amount without prior or
            subsequent notice to you.
          </Text>
        </Text>

        {/* Indemnity */}
        <Text>
          <Text style={styles.title}>9- Indemnity. </Text>
          <Text style={styles.p}>
            You accept and agree to hold, indemnify, release, and defend
            harmless Fanclear and its parent company, subsidiaries, agencies,
            affiliates, directors, employees, and any such of its agents,
            including but not limited to its representatives of any of the
            foregoing entities as well as shareholders, from and against any
            loss or liability, costs, damages, (including legal practitioner’s
            fees and litigation costs) claims or actions of any kind arising or
            which result from your use of the Service as well as any act or
            omission caused by you which affects publicity rights or brings
            about defamation or privacy invasion and/or any violation of these
            Terms of Use. Fanclear reserves the right to exclusively assume
            control of any matter and/or procedures otherwise subject to
            indemnification by you and, in such case, you agree and accept to
            fully participate, support and cooperate with Fanwally in the
            defense of such matter or procedures.
          </Text>
        </Text>

        {/* Limitation on Liability */}
        <Text>
          <Text style={styles.title}>10- Limitation on Liability. </Text>
          <Text style={styles.p}>
            You hereby acknowledge and accept to bear total responsibility for
            your use of all our platforms including but not limited to the Site,
            the App and the Service. You acknowledge and do accept that any
            information you send or receive in the course of using the Site, the
            App and the Service may be subject to interception, waylaid or
            subsequently obtained and/or acquired by unauthorized parties.
          </Text>
        </Text>

        <Text style={styles.text}>
          You understand and fully agree that your use of the Site, the App and
          the Service is conducted wholly at your own risk. In receipt of this
          knowledge, you acknowledge and accept that, to the fullest extent
          allowed by the law that applies, Fanclear and its suppliers or
          licensors will not be liable to you for any compensatory, incidental,
          consequential, punitive, nominal, exemplary, special, or other forms
          of damages, including without limitation damages for use, profit loss,
          goodwill, data or other concrete or intangible losses or damages of
          any kind based on contract, strict liability, tort or any other legal
          concept, contention or conjecture (even if Fanclear had been counseled
          on the possibility of such damages), resulting from the Service, Site
          or App or for any use or incapacity to use the service, site or app.
          This caveat further extends to any form of unlawful access to data or
          manipulations of your data, in addition to acts or statements of third
          parties who may be on the Site or who access the App or the Service.
          It also extends to human errors, actions of oversight inclusive of
          those we take in the mistaken belief of accurate information you send
          to us, technical flaws, typographical errors, crash or latent defects,
          interruption of utilities, damages of any kind or crash of any device,
          network, software (including but not limited to those ones that allow
          for participation in the service) as well as tampering or theft,
          illegal access to any type of content, inability or failure to access
          the service, site or app, and data that is belated, inconclusive,
          wrongly processed, incomplete and/or lost or as a result of any
          combination thereof or any other matter as it relates to the service,
          site or app. Some jurisdictions do not provide for the exclusion of
          some warranties or the limitation or exclusion of liability for
          incidental or consequential damages. Therefore, some of the above
          stated limitations may not apply to you.
        </Text>
      </View>
    );
  }
}
