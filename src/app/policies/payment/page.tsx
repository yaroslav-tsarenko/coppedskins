import { PolicyLayout } from "@/components/layout/PolicyLayout/PolicyLayout";
import { Link } from "@/i18n/routing";
import { brand, brandAddressLine } from "@/lib/brand";

export const metadata = { title: "Payment & Pricing Policy — Coppedskins" };

export default function PaymentPolicyPage() {
  return (
    <PolicyLayout title="Payment & Pricing Policy" lastUpdated="17 September 2026">
      <h2>1. Who you pay</h2>
      <p>
        Your seller is <strong>{brand.company.legalName}</strong>, trading as <strong>Coppedskins</strong>, company
        number <strong>{brand.company.number}</strong>, of <strong>{brandAddressLine}</strong>.
      </p>
      <p>
        This policy applies to purchases at <strong>{brand.domain.replace(/^www\./, "")}</strong> and forms part of
        our <Link href="/policies/terms">Terms &amp; Conditions</Link>. Payment questions can be sent to{" "}
        <strong>{brand.contact.email}</strong>.
      </p>

      <h2>2. Payment methods and currencies</h2>
      <p>
        We accept <strong>Visa</strong> and <strong>Mastercard</strong>. Purchases can be made in{" "}
        <strong>EUR, GBP and USD</strong>. The currency and final amount for your order are displayed before you
        confirm payment.
      </p>
      <p>
        Acceptance of a card transaction remains subject to authorisation and any authentication requested by your
        issuer. We do not guarantee approval of every card.
      </p>
      <p>
        Payments are for individual purchases. We do not offer a stored-value account, wallet top-ups,
        customer-to-customer money transfers or withdrawal of a cash balance.
      </p>

      <h2>3. Prices, taxes and charges</h2>
      <p>
        Review the final total before paying. Any applicable taxes or mandatory charges must be included in the total
        disclosed before you commit to the purchase. Optional extras, if offered, require your express selection and
        will not be added through preselected choices.
      </p>
      <p>
        {brand.company.legalName} is not VAT registered. We do not issue VAT invoices claiming to have charged UK
        VAT. This statement does not mean that every transaction is exempt from all taxes in every country.
      </p>
      <p>
        The price accepted for an order is not increased because the item&rsquo;s market value later rises. If a
        genuine and obvious error affects a listing or checkout total, we will contact you or cancel and refund the
        affected order as appropriate. We will not charge an additional amount without your agreement.
      </p>

      <h2>4. Currency conversion</h2>
      <p>
        The order currency may differ from the currency of your card account. Your bank or card issuer determines any
        exchange rate or fee it applies to that conversion or to an international transaction.
      </p>
      <p>
        Coppedskins does not control those separate charges. A refund in the original transaction currency may
        convert into a different amount in your account currency. This does not restrict any compensation or
        reimbursement required by law.
      </p>

      <h2>5. Authorisation, collection and order acceptance</h2>
      <p>
        When you submit payment, the transaction may be authorised, authenticated, declined or held for review. An
        authorisation can appear as a pending amount before a final charge is completed.
      </p>
      <p>
        Payment confirmation and order acceptance are related but distinct. A purchase contract is formed when we
        issue the Order Confirmation described in the Terms. We will not retain a collected payment for an order we
        decline, except where a legal restriction prevents repayment.
      </p>
      <p>
        We do not start fulfilment solely because a pending authorisation appears. Where immediate digital supply
        requires your separate consent and acknowledgement, those must also be obtained before supply begins.
      </p>

      <h2>6. Failed, pending and duplicate payments</h2>
      <p>
        If checkout reports an error but your account shows a pending or completed transaction, check your order
        records or contact us before attempting repeated payments.
      </p>
      <p>
        Your issuer controls the release of a temporary authorisation. If a payment was completed without a
        corresponding accepted order, we will reconcile it and arrange repayment where due. Confirmed duplicate
        charges for the same order will be refunded.
      </p>
      <p>
        An unsuccessful payment does not guarantee continued availability of an item. If a further payment is needed,
        review the new checkout total before authorising it.
      </p>

      <h2>7. Authentication and security reviews</h2>
      <p>
        Use only a payment method you are authorised to use. Your issuer may require additional verification, such as
        approval through its own authentication process.
      </p>
      <p>
        We may pause an order where proportionate checks are needed to investigate inconsistent details, suspected
        unauthorised use or a legal restriction. We may request relevant information, explain the next step where
        lawful and cancel if the issue cannot reasonably be resolved.
      </p>
      <p>
        We do not ask you to email your complete card number, card security code or banking credentials. See our{" "}
        <Link href="/policies/privacy">Privacy Policy</Link> for payment-related information handling.
      </p>

      <h2>8. Refunds and disputes</h2>
      <p>
        Eligibility, amounts and deadlines are governed by our{" "}
        <Link href="/policies/returns">Refund &amp; Cancellation Policy</Link>. Refunds are normally made to the
        original payment method in the original order currency. We do not impose a refund processing fee.
      </p>
      <p>
        You may contact us about an issue without giving up your cardholder rights. We may respond to a dispute with
        relevant transaction, order and delivery evidence. Where repayment has already been made through one route,
        we will reconcile the record to avoid a duplicate refund.
      </p>

      <h2>9. Location restrictions</h2>
      <p>
        The country restrictions in section 3 of our <Link href="/policies/terms">Terms &amp; Conditions</Link> apply
        to purchases and payments. We may also decline or pause a transaction where required by applicable sanctions
        or another legal obligation. A location restriction is not an automatic basis for confiscating a payment for
        an unfulfilled order.
      </p>
    </PolicyLayout>
  );
}
