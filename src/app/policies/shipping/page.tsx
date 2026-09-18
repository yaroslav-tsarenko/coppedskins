import { PolicyLayout } from "@/components/layout/PolicyLayout/PolicyLayout";
import { Link } from "@/i18n/routing";
import { brand, brandAddressLine } from "@/lib/brand";

export const metadata = { title: "Digital Item Delivery Policy — Coppedskins" };

export default function DigitalItemDeliveryPolicyPage() {
  return (
    <PolicyLayout title="Digital Item Delivery Policy" lastUpdated="17 September 2026">
      <h2>1. Seller and delivery method</h2>
      <p>
        <strong>{brand.company.legalName}</strong>, trading as <strong>Coppedskins</strong>, company number{" "}
        <strong>{brand.company.number}</strong>, of <strong>{brandAddressLine}</strong>, sells the digital items
        offered at <strong>{brand.domain.replace(/^www\./, "")}</strong>.
      </p>
      <p>
        We deliver CS2 items to the Steam account specified for the order through the Steam trading system. No
        physical shipment, activation key or emailed redemption code is supplied. An email confirming an order is not
        the item itself.
      </p>
      <p>
        Contact <strong>{brand.contact.email}</strong> for delivery assistance. This policy should be read with our{" "}
        <Link href="/policies/terms">Terms &amp; Conditions</Link> and{" "}
        <Link href="/policies/returns">Refund &amp; Cancellation Policy</Link>.
      </p>

      <h2>2. Before you purchase</h2>
      <p>
        You need a Steam account that can receive the selected item and any account settings required by Steam for
        the transfer. Provide accurate account and trade information at checkout and check it before paying.
      </p>
      <p>
        Account restrictions, security changes, an invalid trade URL or insufficient inventory capacity can prevent
        or delay delivery. We will explain any item-specific restriction known to us before purchase. You should also
        check the receiving account for restrictions shown by Steam.
      </p>
      <p>
        Do not supply an account or trade URL that you are not authorised to use. Contact us immediately if you
        entered an incorrect destination. We cannot promise to redirect or recover a completed transfer, but will
        investigate any report and remain responsible where the error is ours.
      </p>

      <h2>3. Processing and timing</h2>
      <p>
        Fulfilment follows acceptance of the order and confirmation of payment, subject to necessary checks and any
        agreement about when digital supply may begin.
      </p>
      <p>
        The delivery estimate and any known waiting period applicable to the selected item will be shown before
        purchase. We work to deliver within the stated period. Delivery can require you to accept a trade offer, so
        completion also depends on your response and Steam&rsquo;s availability.
      </p>
      <p>
        An indication of fast delivery is not a guarantee that every transfer is instantaneous. If an unexpected
        issue affects the agreed timing, we will notify you through the available order or contact channel and
        explain the next step. Your rights if delivery fails or is unreasonably delayed are set out in the Refund
        &amp; Cancellation Policy.
      </p>

      <h2>4. Receiving the item safely</h2>
      <p>
        Review the trade in Steam before accepting it. Check that the item matches your purchase and that the offer
        does not require you to give up unrelated items. If something looks wrong, do not accept it; contact us using
        the email on our website.
      </p>
      <p>
        We will not ask you to send an additional skin or make a separate payment to &ldquo;verify&rdquo; or
        &ldquo;unlock&rdquo; an already paid delivery. We do not need your Steam password or authentication code.
      </p>
      <p>
        If an offer expires or is rejected, contact us. We may be able to arrange another delivery attempt after
        checking that the original transfer did not complete. Do not accept competing or unexpected offers while the
        order is being investigated.
      </p>

      <h2>5. When delivery is complete</h2>
      <p>
        Delivery is complete when the correct item reaches the Steam account agreed for the order and the
        platform&rsquo;s records confirm the transfer.
      </p>
      <p>
        Creating or sending a trade offer, assigning an item to an internal account or marking an order as processed
        does not by itself constitute delivery to your Steam inventory. We will investigate discrepancies between an
        order status and the underlying transfer record.
      </p>
      <p>
        Completion does not remove remedies for a wrong item, a non-conforming supply or a later reversal that leaves
        the order unfulfilled.
      </p>

      <h2>6. Trade holds, protection and restrictions</h2>
      <p>
        Steam can impose different types of restriction, including a hold before a trade completes and protection or
        transfer limits after an item is received. These are not all the same and may affect delivery or onward use
        differently.
      </p>
      <p>
        The relevant restriction and remaining period shown by Steam should be checked for the particular item and
        account. Platform rules can change, so we do not promise that every restriction lasts a fixed number of days
        or that an account setting removes all restrictions.
      </p>
      <p>
        If a restriction will delay delivery and is known before purchase, it must be disclosed in the offer. We do
        not describe an item held only on our side as already delivered to your Steam account.
      </p>

      <h2>7. Problems and remedies</h2>
      <p>
        If an item has not arrived, check your order and Steam trade status, then contact us with the order number
        and relevant reference. We may ask you to correct receiving-account settings or confirm an outstanding offer.
      </p>
      <p>
        If the item is unavailable or cannot be delivered, we will address cancellation and repayment. We will not
        substitute an item with materially different characteristics without your agreement.
      </p>
      <p>
        If a trade is reversed, follow section 7 of the Refund &amp; Cancellation Policy. Recovery of an item and
        repayment are checked separately so that the correct outcome can be established.
      </p>

      <h2>8. Availability by country</h2>
      <p>
        Delivery is subject to the service restrictions listed in section 3 of our{" "}
        <Link href="/policies/terms">Terms &amp; Conditions</Link>, applicable law and technical availability. An
        accessible website does not itself mean that every order or receiving account is eligible.
      </p>
    </PolicyLayout>
  );
}
