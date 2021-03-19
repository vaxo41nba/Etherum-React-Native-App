import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles';

export default class ClassActionWaiver extends Component {
  render() {
    return (
      <View>
        <Text style={styles.header}>CLASS ACTION WAIVER</Text>
        <Text style={styles.text}>
          The sections below describe a Class Action Waiver and a Binding
          Resolution clause which may apply to you. It may affect your right to
          file a lawsuit.
        </Text>

        {/* Disagreement Resolution */}
        <Text>
          <Text style={styles.title}>1- Disagreement Resolution. </Text>
          <Text style={styles.p}>
            The parties shall make every possible effort to settle any conflict,
            claim, question, or disputation and engage in negotiations based on
            good faith which shall be a condition to either party resorting to a
            lawsuit or an arbitration panel.
          </Text>
        </Text>

        {/* Disagreement Resolution */}
        <Text>
          <Text style={styles.title}>2- Disagreement Resolution. </Text>
          <Text style={styles.p}>
            Where the parties fail to come to an amicable settlement within a 30
            day window or time frame from when informal dispute resolution under
            the Initial Dispute Resolution requirement commences, then either
            party may proceed to a binding arbitration committee as the
            exclusive medium for resolving claims subject to the terms set out
            below;
          </Text>
        </Text>

        <Text style={styles.text}>
          All claims borne out of or associated with these Terms inclusive of
          performance, formation and/or breach, the parties relationship with
          each other and/or your use of the service shall be subject to a final
          settlement by a binding arbitration panel or committee administered by
          the Arbitration Court of the Estonian Chamber of Commerce and Industry
          and the supplementary procedures for consumer related disputes of the
          American Arbitration Association (AAA), to the exclusion of any rules
          or procedures governing or permitting class actions. As in the case of
          claims that stem from or apply within the Estonian or EU region, the
          same shall be subject to a final settlement by the Court of
          Arbitration of the Estonian Chamber of Commerce and Industry or
          European Court of Arbitrations in line with the arbitration rules of
          the court.
        </Text>
        <Text style={styles.text}>
          Only the arbitrator and/or arbitration award panel to the exclusion of
          all federal, state or local court or agencies, shall have free and
          absolute authority to resolve all disputes borne out of or relating to
          the formation, interpretation, applicability, or enforceability of
          these Terms, including, but not limited to any claim or action that
          parts of these Terms or the entire Terms are void or voidable, or
          whether a claim is subject to arbitration. The arbitrator is empowered
          to grant reliefs as would be available in a competent court under law
          or in equity. The arbitrator’s award shall be written, and binding on
          all parties and may be entered as a judgment in any court of competent
          jurisdiction and enforced upon application for recognition and
          enforcement in line with the procedural rules for enforceability in
          the country and/or region where the judgment is sought to be enforced.
        </Text>
        <Text style={styles.text}>
          The parties understand and accept that, devoid of this obligatory
          requirement, they would have the right to sue in court and be entitled
          to a jury trial. They further understand that, in certain cases, the
          costs of arbitration could outweigh the financial obligations of
          litigation and the right to discovery may be more limited in
          arbitration unlike in court.
        </Text>

        {/* Location */}
        <Text>
          <Text style={styles.title}>3- Location. </Text>
          <Text style={styles.p}>
            Binding arbitration shall take place in Tallinn, Estonia. You agree
            to submit to the personal jurisdiction of the court system in
            Tallinn, Estonia. In order to impel arbitration, or stay proceedings
            pending arbitration, or to confirm, modify, vacate or enter judgment
            on the award entered by the arbitrator.
          </Text>
        </Text>

        {/* Class Action Waiver */}
        <Text>
          <Text style={styles.title}>4- Class Action Waiver. </Text>
          <Text style={styles.p}>
            The parties also agree that arbitration procedures shall be
            conducted not as a class action or other representative action, but
            in their individual capacities, and the parties clearly waive their
            right to maintain a class action or seek relief on such basis. You
            accept that you and Fanclear and/or its agents, principals, or
            privies may maintain an action against each other only in a one on
            one capacity, and not as a plaintiff in any representative
            proceedings or class. Where it is determined by a court of competent
            jurisdiction or the arbitration panel under this Terms, that the
            class action waiver hereunder is unenforceable or void or that an
            arbitration committee or panel can pursue a class action, in that
            case, the above stated arbitration clause set above shall be deemed
            null and void and all parties will be considered not to have such
            arbitration agreement.
          </Text>
        </Text>

        {/* Claims in Court */}
        <Text>
          <Text style={styles.title}>5- Claims in Court. </Text>
          <Text style={styles.p}>
            Notwithstanding anything to the contrary, either party may bring a
            claim or action in a federal or state court to safeguard its
            intellectual property rights or work (“intellectual property rights”
            means patents, copyrights, moral rights, trademarks, and trade
            secrets, but not privacy or publicity rights) without regard to
            their earlier decision to resolve all disputes through arbitration.
            The parties may also seek and pursue relief in a small claims court
            or magistrate courts as referred to in some regions for disputes or
            claims within the scope of that court’s jurisdiction.
          </Text>
        </Text>

        {/* Option to Get Out */}
        <Text>
          <Text style={styles.title}>6- Option to Get Out. </Text>
          <Text style={styles.p}>
            You can exercise your right to opt-out at any point in time and not
            be subject to the class action waiver provisions and arbitration
            process prescribed herein. You can do so by transmitting a written
            and signed notice of your decision not to follow through to
            support@fanclear.com or to the following address:
          </Text>
        </Text>

        <Text style={styles.text}>Fanwally Notifications</Text>
        <Text style={styles.text}>1811 N. Howard St.</Text>
        <Text style={styles.text}>Third Floor</Text>
        <Text style={styles.text}>Philadelphia, PA 19122</Text>

        <Text style={styles.text}>
          You are to transmit the notice within 30 days from June 1, 2020 or
          from the date of your first use of the Service, whichever is later,
          failure to do, you shall be bound to arbitrate disputes in accordance
          with the terms of those paragraphs. Should you opt from these
          arbitration provisions at any point in time, Fanclear will also in no
          way be bound by them.
        </Text>

        {/* Changes to this Section */}
        <Text>
          <Text style={styles.title}>7- Changes to this Section. </Text>
          <Text style={styles.p}>
            Fanclear will provide 60-days’ notice of any changes to this
            section. Those changes will become valid and effective on the 60th
            day, and will apply prospectively only to claims arising after the
            60th day. With regard to disputes not subject to arbitration you and
            Fanclear agree to submit to the personal and exclusive jurisdiction
            of and venue in Tallinn, Estonia. You further agree to accept
            service of process by mail or in person, and hereby waive all
            jurisdictional and venue defenses which may ordinarily apply. The
            Terms and the relationship between you and Fanclear shall be
            governed by the laws of the Republic of Estonia without regard to
            conflict of legal guidelines and/or provisions.
          </Text>
        </Text>
      </View>
    );
  }
}
