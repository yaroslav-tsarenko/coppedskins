import { PolicyLayout } from "@/components/layout/PolicyLayout/PolicyLayout";
import { Link } from "@/i18n/routing";
import { brand, brandAddressLine } from "@/lib/brand";

export const metadata = { title: "Refund & Cancellation Policy — Coppedskins" };

export default function RefundsPolicyPage() {
  return (
    <PolicyLayout title="Refund & Cancellation Policy" lastUpdated="17 September 2026">
      <h2>1. Seller and scope</h2>
      <p>
        This policy applies to CS2 digital items purchased from <strong>{brand.company.legalName}</strong>, trading
        as <strong>Coppedskins</strong>, company number <strong>{brand.company.number}</strong>, of{" "}
        <strong>{brandAddressLine}</strong>.
      </p>
      <p>
        For cancellations, order problems or refund requests, contact <strong>{brand.contact.email}</strong>. This
        policy forms part of our <Link href="/policies/terms">Terms &amp; Conditions</Link>.
      </p>
      <p>
        <strong>
          We do not offer a voluntary change-of-mind return after the correct item has been delivered. This does not
          affect a statutory cancellation right that remains available or your rights if the purchase was not
          properly fulfilled.
        </strong>
      </p>

      <h2>2. Before acceptance and delivery</h2>
      <p>
        You can leave checkout before submitting an order. If you have already paid or submitted it, contact us
        promptly to request cancellation.
      </p>
      <p>
        Before delivery, we will cancel and refund the order if the transfer can still be stopped safely. If a trade
        offer is pending or delivery may already have occurred, we first need to check the status. This does not
        postpone or remove a statutory cancellation right.
      </p>
      <p>
        Simply rejecting or allowing a trade offer to expire does not reliably notify us that you wish to cancel.
        Send a clear cancellation request so that we can stop further delivery attempts and assess your order.
      </p>

      <h2>3. Statutory cancellation rights and immediate supply</h2>
      <p>
        Where the law gives you a cancellation period for digital content, you may cancel within that period unless
        the right has lawfully ended. For UK consumers, the ordinary period is 14 days from the day after the
        contract is made.
      </p>
      <p>
        For immediate digital supply, we ask you before supply begins to expressly consent to starting during that
        period and acknowledge that you will lose the cancellation right once supply begins. We confirm that consent
        and acknowledgement in the order confirmation sent to you.
      </p>
      <p>
        We rely on the loss of that right only where the applicable legal requirements have been met. Charging your
        card, starting an internal order review or including a general &ldquo;no refunds&rdquo; sentence in the Terms
        does not by itself satisfy those requirements.
      </p>
      <p>
        If the required consent, acknowledgement or confirmation is missing, your rights are determined by applicable
        law; we will not assume they have ended merely because a trade occurred. Mandatory rights for an incorrect or
        otherwise non-conforming item continue regardless of a valid immediate-supply acknowledgement.
      </p>
      <p>
        Where your statutory right remains available, you can exercise it by emailing a clear statement of
        cancellation. You may use the form in section 12, but it is not compulsory. Sending the request before the
        applicable deadline is sufficient. If the law gives you a longer period because required information was not
        provided, that longer period applies.
      </p>

      <h2>4. Change of mind after correct delivery</h2>
      <p>
        Subject to section 3 and other mandatory rights, we do not refund a correctly delivered item merely because:
      </p>
      <ul>
        <li>You no longer want it or selected a different item from the one you intended.</li>
        <li>Its market price changes or you find it cheaper elsewhere.</li>
        <li>You expected to sell it at a profit.</li>
        <li>
          Its appearance differs only because of display or rendering settings and its actual characteristics match
          the agreed description.
        </li>
        <li>
          A platform restriction accurately disclosed before purchase temporarily limits onward transfer or
          modification.
        </li>
      </ul>
      <p>
        We do not offer a general 14-day satisfaction guarantee or a return scheme based on whether a delivered skin
        has been used in a game.
      </p>

      <h2>5. Non-delivery, unavailability and seller cancellation</h2>
      <p>
        If we cancel a paid order or cannot supply the purchased item, we will refund the amount paid for that item
        and any charge attributable solely to its unfulfilled delivery.
      </p>
      <p>
        For a temporary delivery problem, we will investigate and, where reasonable, attempt delivery again. You do
        not have to accept an alternative item, an indefinite delay or store credit instead of a monetary refund to
        which you are entitled.
      </p>
      <p>
        Where an agreed delivery deadline is missed, your cancellation and repayment rights depend on the agreed
        terms and applicable law. If a reasonable additional period is appropriate, we will explain it; we will not
        insist on an additional period where the law entitles you to cancel immediately.
      </p>
      <p>
        If your receiving-account settings prevent delivery, we may ask you to correct them. If delivery still cannot
        be completed, we will assess cancellation and refund fairly, without an undisclosed penalty or automatic
        forfeiture of the price.
      </p>

      <h2>6. Incorrect or non-conforming items</h2>
      <p>
        Contact us if the item received does not match the accepted order or if there is another material fulfilment
        problem. Relevant differences can include the item identity, exterior, StatTrak or Souvenir status, or an
        individual attribute expressly promised in the listing.
      </p>
      <p>
        We may ask for proportionate evidence such as the order number, trade reference and a screenshot of the item.
        We will also consider the delivery records available to us. Please avoid transferring or modifying a disputed
        item where reasonably possible while we investigate; this request does not remove your legal rights.
      </p>
      <p>
        We will provide the remedy required by applicable law. Depending on the issue, this may include correcting
        delivery, replacement, a price reduction or a full refund. Under UK digital-content rules, repair or
        replacement may apply first, with a price reduction, potentially up to the full price, where the statutory
        conditions are met. If we had no right to supply the content, the applicable refund entitlement is preserved.
      </p>
      <p>
        We will not require you to pursue an undisclosed supplier instead of dealing with us as seller. If return or
        recovery of an incorrect item is needed, we will provide verified instructions and will not require an
        additional purchase to obtain a remedy.
      </p>

      <h2>7. Steam trade protection and reversals</h2>
      <p>
        Steam&rsquo;s security mechanisms are separate from this refund policy. A reversal can change where an item is
        held without automatically completing the financial cancellation of the order.
      </p>
      <p>
        If a trade is reversed, notify us with the relevant order and trade details. We will check whether the item
        returned to us or the supplying account, whether any replacement transfer occurred and whether a refund or
        payment dispute is already in progress.
      </p>
      <p>
        If a reversal not caused by your misuse leaves you without the purchased item, we will arrange an appropriate
        remedy: renewed delivery where agreed and feasible, or a refund where the order cannot be fulfilled or the
        law requires repayment.
      </p>
      <p>
        If you initiate a reversal, we will assess the reason and any applicable cancellation or security rights. We
        will not automatically treat every reversal as fraud. Where the item has been recovered and the order will
        not be fulfilled again, we will refund the amount due after verification. Any proposed deduction must have a
        lawful, clearly explained basis; we do not impose an automatic reversal penalty.
      </p>
      <p>
        We may restrict future access in response to substantiated abuse, but a restriction does not itself cancel a
        valid repayment obligation. We will not retain both the recovered item and the full purchase price without a
        lawful basis.
      </p>

      <h2>8. Duplicate and unauthorised payments</h2>
      <p>
        If you believe you were charged twice for one order, contact us so that we can distinguish a duplicate
        completed payment from a temporary authorisation. A confirmed duplicate charge will be refunded.
      </p>
      <p>
        If you suspect unauthorised card use, contact your card issuer promptly and let us know so that we can
        investigate and prevent further fulfilment where possible. Nothing in this policy restricts legitimate
        cardholder dispute rights.
      </p>

      <h2>9. How to request help</h2>
      <p>Email {brand.contact.email} with:</p>
      <ul>
        <li>Your order number and the email address used for the purchase.</li>
        <li>A short description of the issue and the outcome requested.</li>
        <li>The relevant trade or payment reference, if available.</li>
        <li>Supporting screenshots where useful, with unrelated personal information concealed.</li>
      </ul>
      <p>
        An order number helps us locate a purchase but is not the only acceptable proof. Do not send passwords,
        authentication codes, card security codes or complete card numbers.
      </p>
      <p>
        We will investigate without undue delay and tell you what information or next step is needed. A request is
        not rejected merely because you did not use a particular form or label.
      </p>

      <h2>10. Refund method, amount and timing</h2>
      <p>
        Refunds are made to the original payment method in the original transaction currency, unless another lawful
        arrangement is expressly agreed or the original route is unavailable. We do not require you to accept store
        credit instead of money where a monetary refund is due.
      </p>
      <p>
        We initiate refunds without undue delay. For a valid UK statutory cancellation, repayment is due within 14
        days after we are informed of the decision to cancel. For a UK digital-content price reduction, repayment is
        due within 14 days after we agree that you are entitled to it. Other mandatory deadlines take priority where
        applicable.
      </p>
      <p>
        For a contractual refund under this policy where no shorter mandatory deadline applies, we will initiate
        repayment no later than 14 calendar days after confirming that the refund is due. We will not use an
        unnecessarily prolonged investigation to avoid a repayment deadline.
      </p>
      <p>
        We do not charge a refund processing fee. Card issuers may take additional time to display a credit after we
        initiate it. If your card account uses another currency, your issuer&rsquo;s conversion rate can differ from
        the original rate; we refund the amount due in the order currency. This does not exclude reimbursement of a
        charge or loss where required by law.
      </p>

      <h2>11. Payment disputes and unresolved complaints</h2>
      <p>
        You are welcome to contact us first so that we can try to resolve an issue directly. Doing so is not a
        condition of exercising a statutory or cardholder right.
      </p>
      <p>
        We may provide relevant order, payment, consent and delivery records to respond to a dispute. If both a
        refund request and a card dispute are open, we will coordinate the processes to avoid paying twice, without
        removing your entitlement to the amount properly due.
      </p>
      <p>
        False claims intended to retain both an item and its price may be challenged. Genuine complaints and lawful
        disputes will not be treated as abuse merely because you raise them.
      </p>
      <p>
        For an unresolved complaint, see the complaints and governing-law provisions in our{" "}
        <Link href="/policies/terms">Terms &amp; Conditions</Link>.
      </p>

      <h2>12. Optional statutory cancellation form</h2>
      <p>
        Complete and send this form only if you wish to cancel a contract and have an applicable right to do so. You
        may instead send any other clear statement.
      </p>
      <p>
        To: {brand.company.legalName}, {brandAddressLine}; {brand.contact.email}.
      </p>
      <p>
        I/We hereby give notice that I/we cancel my/our contract for the supply of the following digital content:
      </p>
      <ul>
        <li>Item(s):</li>
        <li>Order number, if available:</li>
        <li>Ordered on:</li>
        <li>Consumer name(s):</li>
        <li>Consumer address:</li>
        <li>Email used for the order:</li>
        <li>Date:</li>
        <li>Signature of consumer(s), only if this form is sent on paper:</li>
      </ul>
      <p>
        Delete wording that does not apply. Use of this form does not create a cancellation right where it has
        lawfully ended.
      </p>
    </PolicyLayout>
  );
}
