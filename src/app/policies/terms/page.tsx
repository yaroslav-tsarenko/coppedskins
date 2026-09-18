import { PolicyLayout, ContactBlock } from "@/components/layout/PolicyLayout/PolicyLayout";
import { Link } from "@/i18n/routing";
import { brand, brandAddressLine } from "@/lib/brand";

export const metadata = { title: "Terms & Conditions — Coppedskins" };

export default function TermsPage() {
  return (
    <PolicyLayout title="Terms & Conditions" lastUpdated="17 September 2026">
      <h2>1. About Coppedskins</h2>
      <p>
        Coppedskins is operated by <strong>{brand.company.legalName}</strong>, company number{" "}
        <strong>{brand.company.number}</strong>, of <strong>{brandAddressLine}</strong>. Our website is{" "}
        <strong>{brand.domain.replace(/^www\./, "")}</strong>. You can contact us at{" "}
        <strong>{brand.contact.email}</strong>.
      </p>
      <p>
        In these Terms, &ldquo;Coppedskins&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo; and &ldquo;our&rdquo; mean{" "}
        {brand.company.legalName}. &ldquo;You&rdquo; means the person using the website or purchasing a product.
      </p>
      <p>
        We sell Counter-Strike 2 digital in-game items, commonly called skins, in our own name. Your purchase
        contract is with {brand.company.legalName}. We remain responsible for our obligations as seller even where
        fulfilment involves technical service providers.
      </p>

      <h2>2. Scope and related policies</h2>
      <p>
        These Terms govern your use of Coppedskins and purchases made through it. Please read them together with our{" "}
        <Link href="/policies/payment">Payment &amp; Pricing Policy</Link>,{" "}
        <Link href="/policies/shipping">Digital Item Delivery Policy</Link> and{" "}
        <Link href="/policies/returns">Refund &amp; Cancellation Policy</Link>, which form part of the purchase
        terms.
      </p>
      <p>
        Our <Link href="/policies/privacy">Privacy Policy</Link> and{" "}
        <Link href="/policies/cookies">Cookie Policy</Link> explain how information is handled. Accepting these
        Terms does not constitute consent to every processing activity described in those notices.
      </p>
      <p>
        Specific product information and conditions clearly disclosed and agreed before purchase apply to that
        order. Nothing in these documents excludes mandatory consumer rights. If a provision conflicts with those
        rights, the mandatory protection takes priority.
      </p>

      <h2>3. Eligibility and location restrictions</h2>
      <p>
        You must be at least 18 years old, legally able to enter into a contract and authorised to use the payment
        method and Steam account supplied for the order.
      </p>
      <p>
        We do not accept orders from customers located in or ordinarily resident in the following countries:
      </p>
      <p>
        Afghanistan; Belarus; Central African Republic; Cuba; Democratic Republic of the Congo; Haiti; Iran; Iraq;
        Mali; Myanmar (Burma); North Korea; Russia; Somalia; South Sudan; Sudan; Syria; Venezuela; Yemen;
        Zimbabwe.
      </p>
      <p>
        These are our service availability restrictions. Availability elsewhere remains subject to applicable law,
        payment availability and the ability to deliver the item. We may also refuse a transaction involving a
        person or entity subject to applicable sanctions or another legal prohibition.
      </p>
      <p>
        You must provide accurate location and billing information and must not conceal your location or use
        another person&rsquo;s details to bypass a restriction. We may request information reasonably necessary to
        establish eligibility. A refusal or cancellation does not automatically entitle us to retain payment for an
        undelivered item.
      </p>

      <h2>4. Your account and security</h2>
      <p>
        Keep your account information accurate and your login credentials secure. Notify us promptly if you suspect
        unauthorised access or an order you did not place.
      </p>
      <p>
        You are responsible for the accuracy of the Steam account and trade details you provide and for maintaining
        the account&rsquo;s ability to receive the purchased item. We will not ask you to send your Steam password,
        authentication codes or card security code by email.
      </p>
      <p>
        You must not impersonate another person, access someone else&rsquo;s account, exploit website errors or use
        the service for fraud, unlawful transactions, harassment, malicious software or interference with our
        systems. Automated activity that bypasses access controls or materially disrupts the service is prohibited.
      </p>

      <h2>5. What you are buying</h2>
      <p>
        Products are digital in-game items for use within the relevant game and platform. They are not physical
        goods, activation keys, securities or an entitlement to income. Purchasing an item does not transfer
        ownership of the game, its software or underlying intellectual property.
      </p>
      <p>
        An item&rsquo;s use and transferability are subject to the game and platform rules. Before purchasing,
        review the item name, exterior, StatTrak or Souvenir status and any other characteristics expressly
        included in the listing. Where a listing specifies float, pattern, stickers or another individual
        attribute, those stated attributes form part of the product description.
      </p>
      <p>
        Images may be illustrative where clearly identified as such. Display settings and game rendering can affect
        appearance, but this does not excuse supplying a materially different item from the one described.
      </p>
      <p>
        We do not promise that an item will retain its value, increase in price, remain resalable at a particular
        price or remain supported indefinitely by the game platform. These statements do not limit our
        responsibility for the product description or any binding promise made for your order.
      </p>

      <h2>6. Orders and contract formation</h2>
      <p>
        Check your selected item, receiving Steam account, price and currency before paying. Submitting an order is
        your offer to buy the item under the terms displayed at checkout.
      </p>
      <p>
        We accept your order when we issue an <strong>Order Confirmation</strong> expressly confirming acceptance.
        An automated receipt acknowledging a payment or an order request is not acceptance unless it also confirms
        that we have accepted the order. We will provide the confirmation by email so that you can retain it.
      </p>
      <p>
        We may decline an order before acceptance if payment fails, the item is unavailable, delivery cannot
        lawfully be completed or there is a genuine security concern. If money has been collected for an order we do
        not accept, we will return it, subject only to a legal restriction that prevents repayment.
      </p>
      <p>
        After acceptance, we may cancel where fulfilment becomes impossible or unlawful, or where a genuine and
        obvious pricing error requires correction. We will explain the reason where we can lawfully do so. We will
        not charge a higher price or substitute a materially different item without your agreement. Your rights
        concerning cancellation and repayment are set out in the Refund &amp; Cancellation Policy.
      </p>

      <h2>7. Prices and payment</h2>
      <p>
        We accept Visa and Mastercard payments in EUR, GBP and USD. The selected transaction currency and total
        payable are shown before you commit to pay. Prices can change before an order is placed; a later market
        price movement does not itself change an accepted order.
      </p>
      <p>
        Payment is for the individual order. Coppedskins does not provide a stored-value wallet, customer deposits
        or cash withdrawal facilities.
      </p>
      <p>
        {brand.company.legalName} is not VAT registered. We do not issue VAT invoices representing that we have
        charged UK VAT. The final amount payable, including any applicable taxes and mandatory charges, will be
        disclosed before payment. Your card issuer may separately charge for currency conversion or international
        transactions.
      </p>

      <h2>8. Delivery and immediate supply</h2>
      <p>
        Items are delivered through a Steam trade to the receiving account specified for the order. Payment
        confirmation, creation of a trade offer or a website status alone does not prove that the item has reached
        your Steam inventory.
      </p>
      <p>
        Delivery is completed when the correct item is transferred to the agreed Steam account and the transfer is
        confirmed by the platform&rsquo;s records, subject to investigation of any error or subsequent reversal.
      </p>
      <p>
        Where you request immediate supply, we may begin supplying the digital content before any statutory
        cancellation period ends. The checkout will ask for your express consent and acknowledgement of the effect
        on your cancellation right. Your payment alone does not constitute that consent.
      </p>
      <p>
        The Digital Item Delivery Policy explains receiving-account requirements, trade acceptance, delivery delays
        and platform restrictions.
      </p>

      <h2>9. Cancellations, returns and consumer remedies</h2>
      <p>
        We do not offer a voluntary change-of-mind return after correct delivery. A change in market price,
        preference or intended use does not by itself create a refund entitlement.
      </p>
      <p>
        This does not remove any cancellation right that has not lawfully ended, or your remedies for an item that
        was not delivered, does not match the contract or was supplied without the necessary right to supply it. See
        the Refund &amp; Cancellation Policy for the applicable process, including the statutory cancellation form.
      </p>

      <h2>10. Platform restrictions and reversals</h2>
      <p>
        Steam may impose security holds, trade protection, transfer restrictions or account limitations. A
        disclosed restriction is not in itself a defect, but we remain responsible for describing the item and
        delivery arrangements accurately.
      </p>
      <p>
        If a trade is reversed, we will investigate the item and payment records and agree the appropriate next step
        or provide a remedy required by law. Do not assume that a platform reversal automatically cancels your
        purchase contract or that accepting an item removes all statutory rights.
      </p>
      <p>
        You must not use reversals or false payment disputes to obtain both the item and its price. This does not
        restrict legitimate security recovery, complaints, cardholder rights or legal remedies.
      </p>

      <h2>11. Website content and third-party rights</h2>
      <p>
        Our website content, branding and layout are protected by intellectual property rights. You may use the
        website and retain copies of your purchase documents for legitimate personal purposes. You may not
        reproduce or commercially exploit protected content without permission or another lawful basis.
      </p>
      <p>
        Third-party names, item names, images and trademarks belong to their respective rights holders. Coppedskins
        is not affiliated with or endorsed by Valve Corporation. Steam and Counter-Strike are trademarks of their
        respective owner.
      </p>

      <h2>12. Availability and changes</h2>
      <p>
        We may maintain, update or temporarily suspend parts of the website. If an interruption affects a paid
        order, we will address delivery or repayment under the applicable purchase terms.
      </p>
      <p>
        We may update these Terms for future use and future purchases. The version agreed for an accepted order
        continues to govern that order unless a change is required by law or separately agreed with you. We will not
        retrospectively remove an accrued refund or consumer right by updating a policy.
      </p>

      <h2>13. Suspension and account closure</h2>
      <p>
        We may restrict access where reasonably necessary to investigate fraud, protect accounts, address a
        material breach or comply with law. Where appropriate and lawful, we will explain the restriction and allow
        you to clarify or remedy the issue.
      </p>
      <p>
        Account suspension or closure does not automatically cancel a valid claim or allow us to keep money for an
        undelivered order. You may request account closure at {brand.contact.email}. Closing an account does not
        erase records that must be retained for a lawful purpose or settle outstanding orders and disputes by
        itself.
      </p>

      <h2>14. Our responsibility</h2>
      <p>
        We are responsible for losses you suffer that are a foreseeable result of our breach of contract or failure
        to use reasonable care and skill. We do not exclude liability for fraud, fraudulent misrepresentation,
        death or personal injury caused by negligence, or any liability that cannot lawfully be excluded.
      </p>
      <p>
        For consumer purchases, we do not impose a blanket limit that removes statutory remedies or caps all claims
        at the price of an item. We are not responsible for losses caused solely by your unauthorised modification,
        onward transfer, account compromise unrelated to our conduct or breach of platform rules, except to the
        extent that our own breach or the law makes us responsible.
      </p>
      <p>
        The store is intended for personal consumer purchases. We do not undertake to compensate speculative
        trading profits, business interruption or commercial resale losses. This does not exclude a loss for which
        liability cannot lawfully be restricted.
      </p>
      <p>
        If circumstances beyond our reasonable control prevent fulfilment, we will take reasonable steps to reduce
        the impact and inform you. Such circumstances do not give us an unlimited extension of time or remove
        repayment obligations for unfulfilled orders.
      </p>

      <h2>15. Complaints, governing law and courts</h2>
      <p>
        For an order issue or complaint, email {brand.contact.email} with your order number, the relevant facts and
        the outcome you seek. We will investigate and explain our response. If a complaint remains unresolved, we
        will provide information about any alternative dispute resolution arrangements that we are legally required
        to identify, including whether we are obliged or willing to participate.
      </p>
      <p>
        These Terms are governed by the laws of England and Wales. If you are a consumer, this choice does not
        deprive you of mandatory protections available under the law applicable in your country of habitual
        residence. You may bring proceedings before any court available to you under mandatory consumer
        jurisdiction rules. Nothing here requires you to use arbitration or prevents you from contacting a
        competent authority.
      </p>
      <p>
        If a provision cannot be enforced, the remaining provisions continue to apply so far as legally possible. A
        delay in enforcing a right does not itself waive that right.
      </p>

      <ContactBlock />
    </PolicyLayout>
  );
}
