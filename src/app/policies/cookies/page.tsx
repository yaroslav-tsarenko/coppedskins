import { PolicyLayout } from "@/components/layout/PolicyLayout/PolicyLayout";
import { Link } from "@/i18n/routing";
import { brand, brandAddressLine } from "@/lib/brand";

export const metadata = { title: "Cookie Policy — Coppedskins" };

export default function CookiePolicyPage() {
  return (
    <PolicyLayout title="Cookie Policy" lastUpdated="17 September 2026">
      <h2>1. Who we are</h2>
      <p>
        This policy explains the use of cookies and similar device-storage technologies on{" "}
        <strong>{brand.domain.replace(/^www\./, "")}</strong>, operated by{" "}
        <strong>{brand.company.legalName}</strong>, company number <strong>{brand.company.number}</strong>, of{" "}
        <strong>{brandAddressLine}</strong>. Contact: <strong>{brand.contact.email}</strong>.
      </p>

      <h2>2. What these technologies do</h2>
      <p>
        Cookies are small pieces of information stored in your browser. Similar technologies, such as browser local
        storage and session storage, can also preserve information needed for website functions. This policy covers
        those technologies where we use them, not just files labelled as cookies.
      </p>
      <p>
        Session storage generally lasts for the relevant browsing session. Persistent storage remains until its
        configured expiry or until it is removed. Information about server-side account and transaction records is
        covered by our <Link href="/policies/privacy">Privacy Policy</Link>.
      </p>

      <h2>3. Our approach</h2>
      <p>
        We use device storage only where needed to provide requested store functions or another applicable legal
        exception permits it. Relevant functions include maintaining a login session, preserving a checkout in
        progress, protecting requests against abuse and recording a privacy choice where a control is provided.
      </p>
      <p>
        We do not use advertising cookies, behavioural marketing tags or analytics tools to track browsing for
        audience measurement. We do not enable optional tracking merely because you continue browsing.
      </p>
      <p>
        Not every convenient feature is automatically necessary. If a function would require consent, it must remain
        disabled until that consent has been obtained. If our use changes, we will update this policy and provide the
        appropriate choice before activating the relevant technology.
      </p>

      <h2>4. Consent and essential functions</h2>
      <p>
        Where device storage is strictly necessary for a service you explicitly request and the applicable law
        provides an exception, consent is not required for that purpose. Any exemption applies to the specific use,
        rather than granting permission for unrelated tracking.
      </p>
      <p>
        You can control storage through your browser. Blocking necessary storage may prevent login, interrupt
        checkout or require you to enter information again. Rejecting optional technology, if any is introduced, will
        not be treated as a request to disable unrelated essential functionality.
      </p>

      <h2>5. Payment and game-platform interactions</h2>
      <p>
        Payment and delivery may require interaction with systems operated by other organisations. Those
        organisations can use their own technologies within their services. Their notices apply to their independent
        activities; this does not remove our responsibility for technologies that we cause to operate on our
        website.
      </p>

      <h2>6. Managing storage</h2>
      <p>
        Most browsers let you inspect stored data, delete individual cookies or site data, block future storage and
        set rules for particular websites. See your browser&rsquo;s settings for the options available.
      </p>
      <p>
        Deleting browser storage does not itself delete your account, cancel an order or erase transaction records.
        Contact us if you want to make a personal-information request.
      </p>
      <p>
        For questions about a specific storage entry, its purpose or its duration, email {brand.contact.email} with
        the entry name and website address. Do not send the contents of authentication or security cookies.
      </p>
    </PolicyLayout>
  );
}
