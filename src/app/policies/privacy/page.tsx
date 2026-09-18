import { PolicyLayout } from "@/components/layout/PolicyLayout/PolicyLayout";
import { Link } from "@/i18n/routing";
import { brand, brandAddressLine } from "@/lib/brand";

export const metadata = { title: "Privacy Policy — Coppedskins" };

export default function PrivacyPolicyPage() {
  return (
    <PolicyLayout title="Privacy Policy" lastUpdated="17 September 2026">
      <h2>1. Who is responsible for your information</h2>
      <p>
        <strong>{brand.company.legalName}</strong>, company number <strong>{brand.company.number}</strong>, of{" "}
        <strong>{brandAddressLine}</strong>, operates Coppedskins at{" "}
        <strong>{brand.domain.replace(/^www\./, "")}</strong> and is the controller of personal information
        processed for our store operations.
      </p>
      <p>
        For privacy questions or requests, contact <strong>{brand.contact.email}</strong> and identify your message
        as a privacy request.
      </p>

      <h2>2. Information covered by this notice</h2>
      <p>The information needed depends on how you use the store. Relevant categories include:</p>
      <table>
        <thead>
          <tr>
            <th>Category</th>
            <th>Information and circumstances</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Account and contact information</td>
            <td>
              Email address, account identifier and information you provide when registering, updating your account
              or contacting us.
            </td>
          </tr>
          <tr>
            <td>Order and delivery information</td>
            <td>
              Products selected, order value and currency, order status, Steam identifier and trade URL supplied for
              delivery, and relevant trade confirmations, failures or reversals.
            </td>
          </tr>
          <tr>
            <td>Payment-related information</td>
            <td>
              Payment and refund status, transaction references, billing information required for the purchase, and
              limited card information or dispute records where supplied to us in connection with a transaction.
            </td>
          </tr>
          <tr>
            <td>Technical and security information</td>
            <td>
              IP address, browser or device information, request timestamps and relevant access or error records
              generated when you use the website. These records support operation and security, rather than
              marketing analytics.
            </td>
          </tr>
          <tr>
            <td>Support and verification information</td>
            <td>
              Messages, evidence you provide about an order, and information reasonably needed to verify a request,
              investigate suspected misuse or resolve a complaint.
            </td>
          </tr>
          <tr>
            <td>Agreement records</td>
            <td>
              The version of purchase terms accepted and the record of any request for immediate supply and
              associated acknowledgement.
            </td>
          </tr>
        </tbody>
      </table>
      <p>
        Please do not send passwords, authentication codes, full payment-card details or unnecessary identity
        documents to our support email. If further verification is needed, we will explain what information is
        required and how to provide it.
      </p>

      <h2>3. Where information comes from</h2>
      <p>
        We obtain information from you when you create an account, provide delivery details, place an order or
        communicate with us. Technical records arise from your use of the website.
      </p>
      <p>
        We also receive information needed to administer a transaction from parties involved in payment processing
        and digital delivery. This can include payment outcomes, refund or dispute notifications, and Steam account
        or trade information relevant to the delivery you requested. We do not treat access to a public profile as
        permission to collect unrelated personal information.
      </p>

      <h2>4. Purposes and legal bases</h2>
      <table>
        <thead>
          <tr>
            <th>Purpose</th>
            <th>Legal basis</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Set up and operate your account; process an order; deliver an item; communicate about fulfilment</td>
            <td>Performance of our contract with you, or steps you request before entering into it.</td>
          </tr>
          <tr>
            <td>Handle order problems, refunds and customer enquiries</td>
            <td>Contract performance; compliance with applicable consumer obligations where relevant.</td>
          </tr>
          <tr>
            <td>Keep records required by accounting, tax or other applicable law; respond to valid legal requests</td>
            <td>Compliance with a legal obligation.</td>
          </tr>
          <tr>
            <td>Secure the website, investigate misuse, assess suspicious orders and protect accounts</td>
            <td>
              Our legitimate interests in operating a reliable store and preventing fraud, balanced against your
              rights; legal obligations where a specific requirement applies.
            </td>
          </tr>
          <tr>
            <td>Establish, exercise or defend legal claims and respond to payment disputes</td>
            <td>Our legitimate interests in resolving disputes and protecting legal rights.</td>
          </tr>
          <tr>
            <td>Record agreement to terms and immediate supply</td>
            <td>
              Contract administration and our legitimate interest in demonstrating the transaction agreed;
              compliance with applicable legal record requirements.
            </td>
          </tr>
        </tbody>
      </table>
      <p>
        Where we rely on legitimate interests, we consider whether the processing is necessary and whether your
        interests or rights override ours. You can object on grounds relating to your particular situation.
      </p>
      <p>
        An acknowledgement about immediate digital delivery is a consumer-contract requirement. It is not a blanket
        privacy consent.
      </p>

      <h2>5. Service messages and marketing</h2>
      <p>
        We use your contact details for account administration, order confirmations, delivery updates, security
        notices, support and other necessary service communications.
      </p>
      <p>
        We do not send marketing newsletters or promotional email campaigns, and we do not use advertising cookies
        or marketing analytics on the website. Essential operational and security records are distinct from
        marketing analytics.
      </p>
      <p>
        If we introduce an optional use of personal information in the future, we will first provide the relevant
        information and establish the required legal basis, including consent where required.
      </p>

      <h2>6. Who may receive information</h2>
      <p>We share information only as needed for a relevant purpose, including with these categories of recipients:</p>
      <ul>
        <li>
          Providers supporting website hosting, infrastructure, account functionality, transactional email and
          technical security.
        </li>
        <li>
          Payment processors, acquiring institutions, card issuers and card networks involved in authorising a
          payment, returning funds or resolving a dispute.
        </li>
        <li>
          The game platform and parties providing the item or technical fulfilment, to the extent needed to transfer
          the purchased item and verify delivery.
        </li>
        <li>Professional advisers, such as accountants and legal advisers, where access is necessary for their work.</li>
        <li>
          Courts, regulators, law-enforcement bodies and other authorities where disclosure is legally required or
          otherwise justified by law.
        </li>
        <li>
          A prospective or actual successor to the relevant business, subject to appropriate confidentiality and
          data-protection arrangements if a business transfer occurs.
        </li>
      </ul>
      <p>
        Some recipients act on our instructions; others, such as a card issuer or game platform, may act as
        independent controllers for their own services. We limit disclosures to information relevant to the purpose.
        We do not sell your personal information for advertising.
      </p>

      <h2>7. International processing</h2>
      <p>
        Using an online store, international payment systems and a game platform can involve processing outside the
        United Kingdom or your country of residence. The protection available under local law may differ.
      </p>
      <p>
        Where we arrange a restricted international transfer, we must have an appropriate legal basis for it.
        Depending on the destination and circumstances, this may involve an applicable adequacy decision or approved
        contractual safeguards, together with additional measures where needed. We do not rely on your acceptance of
        this Privacy Policy as a substitute for required transfer safeguards.
      </p>
      <p>
        You may contact us for information about the destinations and safeguards relevant to your data, and to
        request a copy or explanation of applicable safeguards, subject to necessary redactions.
      </p>

      <h2>8. Retention</h2>
      <p>
        We retain information only for as long as reasonably necessary for the purpose for which it is held,
        including applicable legal requirements. The criteria differ by record type:
      </p>
      <ul>
        <li>
          Account information is needed while an account is active; after closure, only information still needed for
          outstanding transactions, obligations or justified claims is retained.
        </li>
        <li>
          Order, payment and refund records are retained for the accounting and tax periods applicable to the
          transaction and for relevant dispute or legal claim periods.
        </li>
        <li>
          Delivery and agreement records are retained to administer the purchase, establish what was agreed and
          resolve delivery or payment disputes.
        </li>
        <li>
          Support records are retained while an issue is open and for a proportionate period afterwards, considering
          the nature of the issue and any continuing claim.
        </li>
        <li>
          Technical and security records are retained for the operational or investigation period they support, with
          longer retention only where a specific incident or obligation justifies it.
        </li>
      </ul>
      <p>
        A legal hold may require particular records to be retained while a dispute or investigation remains open.
        Once no lawful retention purpose remains, information is deleted or anonymised. Removing an account does not
        require immediate deletion of every related transaction record.
      </p>

      <h2>9. Security and payment information</h2>
      <p>
        We use safeguards appropriate to the information and risks involved. No online system can be guaranteed
        completely secure. Contact us promptly if you suspect an issue affecting your Coppedskins account or order.
      </p>
      <p>
        Payment details required at checkout are handled through the payment process. Our support team does not need
        your card security code or online banking credentials. Do not include those details in messages or evidence
        submitted to us.
      </p>

      <h2>10. Your choices and rights</h2>
      <p>
        Depending on the law that applies and the circumstances, you may have rights to access your personal
        information, correct inaccurate information, request erasure, restrict processing, object to processing or
        receive certain information in a portable format. Where processing is based on consent, you may withdraw it
        without affecting earlier lawful processing.
      </p>
      <p>
        These rights have conditions and exceptions. For example, we may need to retain transaction records despite a
        deletion request. We will explain any restriction that applies to your request.
      </p>
      <p>
        You can submit a request to {brand.contact.email}. We may ask for proportionate information to verify your
        identity. Requests are normally free and will be handled within the applicable legal timeframe, ordinarily
        one month under UK data-protection law, subject to permitted extensions or other lawful adjustments. We will
        explain any applicable extension or fee.
      </p>
      <p>
        You can complain to the UK Information Commissioner&rsquo;s Office at{" "}
        <a href="https://ico.org.uk/make-a-complaint/" target="_blank" rel="noopener noreferrer">
          ico.org.uk
        </a>
        , or to another competent data-protection authority available to you. You do not have to contact us first to
        exercise that right, although we welcome the opportunity to address your concern.
      </p>

      <h2>11. Required information and transaction checks</h2>
      <p>
        Certain account, payment and Steam delivery information is necessary to fulfil an order. If you do not
        provide the required information, we may be unable to accept or deliver the purchase. We will identify
        required fields in the relevant process.
      </p>
      <p>
        Transactions may be subject to technical validation and security checks. A card issuer or payment processor
        may independently decline or authenticate a payment. If you believe a Coppedskins order restriction is
        incorrect, contact us to request a review and provide relevant information. We will explain the outcome as far
        as lawful security and confidentiality restrictions permit.
      </p>

      <h2>12. Age restrictions</h2>
      <p>
        The store is for people aged 18 and over. If you believe a person under 18 has provided personal information
        or placed an order, contact us so that we can investigate and take appropriate action, including addressing
        any records that must be retained by law.
      </p>

      <h2>13. Cookies and updates</h2>
      <p>
        Our <Link href="/policies/cookies">Cookie Policy</Link> explains device storage used for the website. We may
        update this Privacy Policy when our operations or legal requirements change. Material changes will be brought
        to your attention where required, and the date at the top will be updated.
      </p>
    </PolicyLayout>
  );
}
