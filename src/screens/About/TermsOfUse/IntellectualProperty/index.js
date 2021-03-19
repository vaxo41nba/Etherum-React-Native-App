import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles';

export default class IntellectualProperty extends Component {
  render() {
    return (
      <View>
        <Text style={styles.header}>INTELLECTUAL PROPERTY</Text>

        {/* Proprietary Rights */}
        <Text>
          <Text style={styles.title}>1- Proprietary Rights. </Text>
          <Text style={styles.p}>
            All title, ownership and intellectual property rights in and that do
            extend to the Service are exclusively owned and managed by Fanwally
            or its licensors. You acknowledge and accept that the Service
            contains proprietary and confidential data that is protected by
            applicable intellectual property laws and other laws. Except as
            expressly authorized by Fanclear, you agree not to copy, amend,
            alter, modify, rent, lease, loan, sell, distribute, perform, display
            or create derivative works based on the Service, Site, or the App,
            either in whole or in part.
          </Text>
        </Text>

        {/* Beneficiaries */}
        <Text>
          <Text style={styles.title}>2- Beneficiaries. </Text>
          <Text style={styles.p}>
            You acknowledge and agree that, except as otherwise expressly stated
            in these Terms, third party beneficiaries to the Terms do not and
            will not apply.
          </Text>
        </Text>

        {/* Limited License */}
        <Text>
          <Text style={styles.title}>3- Limited License. </Text>
          <Text style={styles.p}>
            The permission we give in making use of the Service, Site and App
            (collectively, “Access”) is non-exclusive, limited and revocable
            subject to certain conditions already acknowledged under the Terms
            of Use. The access we allow, remains effectual until you are in
            breach of such Terms of Use or unless terminated by you. The
            Fanclear Services are not transferable, hence they are not sold or
            transferred to you. Fanclear and its licensors retain complete
            ownership of all copies of the software applications even after
            installation on your personal devices to wit; computers, mobile
            handsets, tablets, wearable devices, speakers and/or other forms of
            devices. Fanclear service marks, trade names, logos, domain names,
            and trademarks and any other items of the Fanwally brand (“Fanwally
            Brand Features”) are the exclusive property of Fanclear or its
            licensors. The Terms does not give rise to any rights to use any
            Fanwally Brand Features whether for commercial or non-commercial
            use. You consent to abide by our user guidelines and not to use the
            Service or any part thereof in a way or manner not expressly
            permitted by the Terms. Except for the rights expressly granted to
            you in the Terms, Fanwally affords no right, title, or interest to
            you in the Service, Site, or the App. Third party software like open
            source software libraries included in the Service are available to
            you under the relevant third party software library’s license terms.
          </Text>
        </Text>

        <Text style={styles.text}>
          Notwithstanding anything to the contrary, nothing in the Terms
          entitles you to use, copy, fork, modify, alter, change or create
          derivative works based on the App’s source code for commercial
          purposes without our prior written consent.
        </Text>

        {/* Terminating Accounts */}
        <Text>
          <Text style={styles.title}>4- Terminating Accounts. </Text>
          <Text style={styles.p}>
            Fanclear may terminate or suspend all or parts of the Service as
            well as your Fanwally access, immediately without prior notice or
            liability, if and when you do breach any conditions of the Terms or
            for any other reason. Upon terminating your access, your right to
            use the Service is foreclosed. The following terms “Indemnity”,
            “Warranty Disclaimers”, “Proprietary Rights”, “Limited License”,
            “Links”, “Terminating Accounts” “Beneficiaries”, “Copyright Claims”,
            “Class Action Waiver”, “General Information” do survive any
            termination of these Terms.
          </Text>
        </Text>

        {/* Copyright Claims */}
        <Text>
          <Text style={styles.title}>5- Copyright Claims. </Text>
          <Text style={styles.p}>
            When under the belief that your copyright or that of a person on
            whose behalf you were authorized to act has been violated and/or
            contravened, immediately make available the following information to
            Fanwally’s Copyright Agent in form of a written Notice or Email:
          </Text>
        </Text>

        <View style={styles.list}>
          <Text style={styles.p}>
            1. The description of the infringed intellectual property work
            and/or that of the copyrighted work;
          </Text>
          <Text style={styles.p}>
            2. A physical signature or an electronic signature of the person who
            was authorized to act on behalf of the copyright owner or other
            intellectual property interest;
          </Text>
          <Text style={styles.p}>
            3. A clear description of the location of the material that you
            claim is an infringement on the Service;
          </Text>
          <Text style={styles.p}>
            4. A detailed provision of your bio information as to include:
            address, telephone number, and email address and such alike if
            specifically requested;
          </Text>
          <Text style={styles.p}>
            5. A written and signed statement by you showing good faith and
            belief that the disputed use is not in any way authorized by the
            copyright owner, its agent, privies, principals or the law;
          </Text>
          <Text style={styles.p}>
            6. A sworn affidavit by you, stating that the above information in
            your Notice is true and correct and that you are the copyright or
            intellectual property owner or the person who has been legally
            authorized to act on the copyright or intellectual property owner’s
            behalf;
          </Text>
        </View>

        {/* Fanwally’s Legal Agent: */}
        <Text style={styles.text}>Fanwally’s Legal Agent:</Text>
        <Text style={styles.text}>Fanclear Copyright</Text>
        <Text style={styles.text}>c/o Third Floor</Text>
        <Text style={styles.text}>1811 N. Howard St.</Text>
        <Text style={styles.text}>Philadelphia, PA 19122</Text>
        <Text style={styles.text}>Email: support@fanclear.com</Text>

        {/* Links */}
        <Text>
          <Text style={styles.title}>6- Links. </Text>
          <Text style={styles.p}>
            The Service provides links to other web accessible platforms,
            applications and/or resources and third parties may also so provide.
            Based on the foregoing, Fanclear exercises no control whatsoever
            over such third party operations, hence, Fanclear is in no way
            accountable for such external resources, does not approve and will
            under no circumstance be culpable and/or liable for any such
            products, contents or materials on or made handy from such sites or
            platforms. You further accept and agree that Fanwally shall not be
            directly or indirectly liable for any loss or damage which occur or
            is alleged to have occurred by or in connection with use of any such
            content, materials, products or services or such alike connected
            thereto, available on or through any such site or platforms.
          </Text>
        </Text>
      </View>
    );
  }
}
