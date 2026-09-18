---
project: Coppedskins
document_type: website_policy_pack
version: "1.0"
prepared_on: "2026-09-17"
public_language: en-GB
internal_language: ru
status: complete_editorial_draft_pending_implementation_verification
canonical_domain: https://coppedskins.com
publication_date_token: "{{POLICY_EFFECTIVE_DATE}}"
---

# Coppedskins — Website Policies and Implementation Brief

## INTERNAL — Инструкция для ИИ-агента

Этот файл содержит шесть политик, страницу реквизитов, индекс юридических страниц и связанные тексты интерфейса. Публичные документы написаны на английском. Блоки INTERNAL, метаданные и комментарии-разделители не публиковать.

### Как использовать файл

1. Каждый документ находится между `<!-- PUBLIC_DOCUMENT_START: id -->` и `<!-- PUBLIC_DOCUMENT_END: id -->`. Извлекать только содержимое между соответствующими маркерами.
2. Размещать документы по маршрутам из таблицы ниже. Не сокращать положения о правах потребителя и не переносить в них условия старых политик автоматически.
3. Заменить `{{POLICY_EFFECTIVE_DATE}}` единой фактической датой вступления документов в силу в формате `17 September 2026`. Дата подготовки файла не является датой публикации.
4. Внутренние ссылки намеренно относительные: они должны работать и на dev-домене, и на coppedskins.com. Публичное наименование сайта и контакты — только production-реквизиты.
5. Раздел INTERNAL в конце содержит конкретные проверки перед публикацией. Не придумывать технические процессы для заполнения неизвестных данных. При расхождении реализации и текста исправить реализацию в рамках поручения либо отметить точное расхождение владельцу.
6. Публичные тексты — согласованный проект условий, который нужно реализовать операционно. Они не подтверждают, что техническая реализация, налоговый учёт и обработка данных уже проверены.

### Карта страниц

| ID | Заголовок | Маршрут |
|---|---|---|
| terms | Terms & Conditions | /policies/terms |
| privacy | Privacy Policy | /policies/privacy |
| cookies | Cookie Policy | /policies/cookies |
| refunds | Refund & Cancellation Policy | /policies/returns |
| delivery | Digital Item Delivery Policy | /policies/shipping |
| payments | Payment & Pricing Policy | /policies/payment |
| company | Company Information & Contact | /contact |
| index | Policies | /policies |

Существующий маршрут `/policies/shipping` сохраняется для совместимости, но публичный заголовок и ссылки должны говорить о цифровой доставке, а не физической отправке. Если есть отдельная страница About, синхронизировать её реквизиты с `/contact`.

### Подтверждённые исходные данные

- Бренд: Coppedskins.
- Продавец всех товаров от своего имени: WILDSTONE STUDIOS LTD.
- Company number: 17358100.
- Адрес: Dept 6958, 196 High Road, Wood Green, London, United Kingdom, N22 8HH.
- Домен: coppedskins.com; email: info@coppedskins.com.
- Товары: только цифровые предметы CS2; передача в Steam-инвентарь покупателя. Ключей и кодов нет.
- Возраст: 18+.
- Оплата: Visa и Mastercard; EUR, GBP и USD.
- Компания не зарегистрирована для VAT. Это не является утверждением об отсутствии налоговых обязательств в других юрисдикциях.
- Аналитика, рекламные cookies и маркетинговые email-рассылки не планируются.
- Названия платёжного провайдера и иных технических подрядчиков не публиковать. Категории получателей данных раскрывать. Steam, CS2 и Valve упоминаются только там, где это необходимо для описания товара, доставки и прав на обозначения.
- Отдельная добровольная гарантия возврата доставленного скина в течение 14 дней не предоставляется. Обязательные законные права потребителя сохраняются.
- Исключённые страны: Sudan, Democratic Republic of the Congo, Iran, Mali, Myanmar (Burma), North Korea, South Sudan, Syria, Yemen, Afghanistan, Belarus, Central African Republic, Cuba, Haiti, Iraq, Russia, Somalia, Venezuela, Zimbabwe.

### Принятые редакционные и операционные решения

- Разовая оплата конкретного заказа, без кошелька, пополнений и вывода денег. Это соответствует изученному How It Works; проверить, что checkout работает именно так.
- Договор возникает при явном Order Confirmation от компании. Квитанция о платеже сама по себе не считается принятием заказа, если не содержит такого подтверждения.
- Доставка завершена при подтверждённой передаче правильного предмета в согласованный Steam-аккаунт. Отправленное предложение обмена и внутренняя запись на сайте сами по себе не равны доставке.
- Запрос на немедленную поставку и подтверждение утраты statutory cancellation right собираются отдельно от общего принятия Terms. Начало поставки цифрового контента не приравнивается к авторизации карты или внутренней обработке заказа.
- Если нет согласия на немедленную поставку, агент не должен тихо начинать её: нужен поддерживаемый вариант отложенной поставки либо остановка оформления с понятным объяснением. Не изобретать резервирование на 14 дней.
- Для обычной отмены до доставки политика предусматривает возврат, если передачу ещё можно безопасно остановить. Проверка состояния обмена не должна бессрочно блокировать возврат.
- Если передача отменена и компания получила предмет обратно, деньги не конфискуются автоматически. Заказ либо повторно исполняется по договорённости, либо производится возврат после проверки, с сохранением обязательных сроков.
- Не задаются выдуманные сроки доставки, ответа поддержки, хранения данных и банковского зачисления.

---

<!-- PUBLIC_DOCUMENT_START: terms -->
# Terms & Conditions

Last updated: {{POLICY_EFFECTIVE_DATE}}

## 1. About Coppedskins

Coppedskins is operated by **WILDSTONE STUDIOS LTD**, company number **17358100**, of **Dept 6958, 196 High Road, Wood Green, London, United Kingdom, N22 8HH**. Our website is **coppedskins.com**. You can contact us at **info@coppedskins.com**.

In these Terms, “Coppedskins”, “we”, “us” and “our” mean WILDSTONE STUDIOS LTD. “You” means the person using the website or purchasing a product.

We sell Counter-Strike 2 digital in-game items, commonly called skins, in our own name. Your purchase contract is with WILDSTONE STUDIOS LTD. We remain responsible for our obligations as seller even where fulfilment involves technical service providers.

## 2. Scope and related policies

These Terms govern your use of Coppedskins and purchases made through it. Please read them together with our [Payment & Pricing Policy](/policies/payment), [Digital Item Delivery Policy](/policies/shipping) and [Refund & Cancellation Policy](/policies/returns), which form part of the purchase terms.

Our [Privacy Policy](/policies/privacy) and [Cookie Policy](/policies/cookies) explain how information is handled. Accepting these Terms does not constitute consent to every processing activity described in those notices.

Specific product information and conditions clearly disclosed and agreed before purchase apply to that order. Nothing in these documents excludes mandatory consumer rights. If a provision conflicts with those rights, the mandatory protection takes priority.

## 3. Eligibility and location restrictions

You must be at least 18 years old, legally able to enter into a contract and authorised to use the payment method and Steam account supplied for the order.

We do not accept orders from customers located in or ordinarily resident in the following countries:

Afghanistan; Belarus; Central African Republic; Cuba; Democratic Republic of the Congo; Haiti; Iran; Iraq; Mali; Myanmar (Burma); North Korea; Russia; Somalia; South Sudan; Sudan; Syria; Venezuela; Yemen; Zimbabwe.

These are our service availability restrictions. Availability elsewhere remains subject to applicable law, payment availability and the ability to deliver the item. We may also refuse a transaction involving a person or entity subject to applicable sanctions or another legal prohibition.

You must provide accurate location and billing information and must not conceal your location or use another person's details to bypass a restriction. We may request information reasonably necessary to establish eligibility. A refusal or cancellation does not automatically entitle us to retain payment for an undelivered item.

## 4. Your account and security

Keep your account information accurate and your login credentials secure. Notify us promptly if you suspect unauthorised access or an order you did not place.

You are responsible for the accuracy of the Steam account and trade details you provide and for maintaining the account's ability to receive the purchased item. We will not ask you to send your Steam password, authentication codes or card security code by email.

You must not impersonate another person, access someone else's account, exploit website errors or use the service for fraud, unlawful transactions, harassment, malicious software or interference with our systems. Automated activity that bypasses access controls or materially disrupts the service is prohibited.

## 5. What you are buying

Products are digital in-game items for use within the relevant game and platform. They are not physical goods, activation keys, securities or an entitlement to income. Purchasing an item does not transfer ownership of the game, its software or underlying intellectual property.

An item's use and transferability are subject to the game and platform rules. Before purchasing, review the item name, exterior, StatTrak or Souvenir status and any other characteristics expressly included in the listing. Where a listing specifies float, pattern, stickers or another individual attribute, those stated attributes form part of the product description.

Images may be illustrative where clearly identified as such. Display settings and game rendering can affect appearance, but this does not excuse supplying a materially different item from the one described.

We do not promise that an item will retain its value, increase in price, remain resalable at a particular price or remain supported indefinitely by the game platform. These statements do not limit our responsibility for the product description or any binding promise made for your order.

## 6. Orders and contract formation

Check your selected item, receiving Steam account, price and currency before paying. Submitting an order is your offer to buy the item under the terms displayed at checkout.

We accept your order when we issue an **Order Confirmation** expressly confirming acceptance. An automated receipt acknowledging a payment or an order request is not acceptance unless it also confirms that we have accepted the order. We will provide the confirmation by email so that you can retain it.

We may decline an order before acceptance if payment fails, the item is unavailable, delivery cannot lawfully be completed or there is a genuine security concern. If money has been collected for an order we do not accept, we will return it, subject only to a legal restriction that prevents repayment.

After acceptance, we may cancel where fulfilment becomes impossible or unlawful, or where a genuine and obvious pricing error requires correction. We will explain the reason where we can lawfully do so. We will not charge a higher price or substitute a materially different item without your agreement. Your rights concerning cancellation and repayment are set out in the Refund & Cancellation Policy.

## 7. Prices and payment

We accept Visa and Mastercard payments in EUR, GBP and USD. The selected transaction currency and total payable are shown before you commit to pay. Prices can change before an order is placed; a later market price movement does not itself change an accepted order.

Payment is for the individual order. Coppedskins does not provide a stored-value wallet, customer deposits or cash withdrawal facilities.

WILDSTONE STUDIOS LTD is not VAT registered. We do not issue VAT invoices representing that we have charged UK VAT. The final amount payable, including any applicable taxes and mandatory charges, will be disclosed before payment. Your card issuer may separately charge for currency conversion or international transactions.

## 8. Delivery and immediate supply

Items are delivered through a Steam trade to the receiving account specified for the order. Payment confirmation, creation of a trade offer or a website status alone does not prove that the item has reached your Steam inventory.

Delivery is completed when the correct item is transferred to the agreed Steam account and the transfer is confirmed by the platform's records, subject to investigation of any error or subsequent reversal.

Where you request immediate supply, we may begin supplying the digital content before any statutory cancellation period ends. The checkout will ask for your express consent and acknowledgement of the effect on your cancellation right. Your payment alone does not constitute that consent.

The Digital Item Delivery Policy explains receiving-account requirements, trade acceptance, delivery delays and platform restrictions.

## 9. Cancellations, returns and consumer remedies

We do not offer a voluntary change-of-mind return after correct delivery. A change in market price, preference or intended use does not by itself create a refund entitlement.

This does not remove any cancellation right that has not lawfully ended, or your remedies for an item that was not delivered, does not match the contract or was supplied without the necessary right to supply it. See the Refund & Cancellation Policy for the applicable process, including the statutory cancellation form.

## 10. Platform restrictions and reversals

Steam may impose security holds, trade protection, transfer restrictions or account limitations. A disclosed restriction is not in itself a defect, but we remain responsible for describing the item and delivery arrangements accurately.

If a trade is reversed, we will investigate the item and payment records and agree the appropriate next step or provide a remedy required by law. Do not assume that a platform reversal automatically cancels your purchase contract or that accepting an item removes all statutory rights.

You must not use reversals or false payment disputes to obtain both the item and its price. This does not restrict legitimate security recovery, complaints, cardholder rights or legal remedies.

## 11. Website content and third-party rights

Our website content, branding and layout are protected by intellectual property rights. You may use the website and retain copies of your purchase documents for legitimate personal purposes. You may not reproduce or commercially exploit protected content without permission or another lawful basis.

Third-party names, item names, images and trademarks belong to their respective rights holders. Coppedskins is not affiliated with or endorsed by Valve Corporation. Steam and Counter-Strike are trademarks of their respective owner.

## 12. Availability and changes

We may maintain, update or temporarily suspend parts of the website. If an interruption affects a paid order, we will address delivery or repayment under the applicable purchase terms.

We may update these Terms for future use and future purchases. The version agreed for an accepted order continues to govern that order unless a change is required by law or separately agreed with you. We will not retrospectively remove an accrued refund or consumer right by updating a policy.

## 13. Suspension and account closure

We may restrict access where reasonably necessary to investigate fraud, protect accounts, address a material breach or comply with law. Where appropriate and lawful, we will explain the restriction and allow you to clarify or remedy the issue.

Account suspension or closure does not automatically cancel a valid claim or allow us to keep money for an undelivered order. You may request account closure at info@coppedskins.com. Closing an account does not erase records that must be retained for a lawful purpose or settle outstanding orders and disputes by itself.

## 14. Our responsibility

We are responsible for losses you suffer that are a foreseeable result of our breach of contract or failure to use reasonable care and skill. We do not exclude liability for fraud, fraudulent misrepresentation, death or personal injury caused by negligence, or any liability that cannot lawfully be excluded.

For consumer purchases, we do not impose a blanket limit that removes statutory remedies or caps all claims at the price of an item. We are not responsible for losses caused solely by your unauthorised modification, onward transfer, account compromise unrelated to our conduct or breach of platform rules, except to the extent that our own breach or the law makes us responsible.

The store is intended for personal consumer purchases. We do not undertake to compensate speculative trading profits, business interruption or commercial resale losses. This does not exclude a loss for which liability cannot lawfully be restricted.

If circumstances beyond our reasonable control prevent fulfilment, we will take reasonable steps to reduce the impact and inform you. Such circumstances do not give us an unlimited extension of time or remove repayment obligations for unfulfilled orders.

## 15. Complaints, governing law and courts

For an order issue or complaint, email info@coppedskins.com with your order number, the relevant facts and the outcome you seek. We will investigate and explain our response. If a complaint remains unresolved, we will provide information about any alternative dispute resolution arrangements that we are legally required to identify, including whether we are obliged or willing to participate.

These Terms are governed by the laws of England and Wales. If you are a consumer, this choice does not deprive you of mandatory protections available under the law applicable in your country of habitual residence. You may bring proceedings before any court available to you under mandatory consumer jurisdiction rules. Nothing here requires you to use arbitration or prevents you from contacting a competent authority.

If a provision cannot be enforced, the remaining provisions continue to apply so far as legally possible. A delay in enforcing a right does not itself waive that right.

<!-- PUBLIC_DOCUMENT_END: terms -->

---

<!-- PUBLIC_DOCUMENT_START: privacy -->
# Privacy Policy

Last updated: {{POLICY_EFFECTIVE_DATE}}

## 1. Who is responsible for your information

**WILDSTONE STUDIOS LTD**, company number **17358100**, of **Dept 6958, 196 High Road, Wood Green, London, United Kingdom, N22 8HH**, operates Coppedskins at **coppedskins.com** and is the controller of personal information processed for our store operations.

For privacy questions or requests, contact **info@coppedskins.com** and identify your message as a privacy request.

## 2. Information covered by this notice

The information needed depends on how you use the store. Relevant categories include:

| Category | Information and circumstances |
|---|---|
| Account and contact information | Email address, account identifier and information you provide when registering, updating your account or contacting us. |
| Order and delivery information | Products selected, order value and currency, order status, Steam identifier and trade URL supplied for delivery, and relevant trade confirmations, failures or reversals. |
| Payment-related information | Payment and refund status, transaction references, billing information required for the purchase, and limited card information or dispute records where supplied to us in connection with a transaction. |
| Technical and security information | IP address, browser or device information, request timestamps and relevant access or error records generated when you use the website. These records support operation and security, rather than marketing analytics. |
| Support and verification information | Messages, evidence you provide about an order, and information reasonably needed to verify a request, investigate suspected misuse or resolve a complaint. |
| Agreement records | The version of purchase terms accepted and the record of any request for immediate supply and associated acknowledgement. |

Please do not send passwords, authentication codes, full payment-card details or unnecessary identity documents to our support email. If further verification is needed, we will explain what information is required and how to provide it.

## 3. Where information comes from

We obtain information from you when you create an account, provide delivery details, place an order or communicate with us. Technical records arise from your use of the website.

We also receive information needed to administer a transaction from parties involved in payment processing and digital delivery. This can include payment outcomes, refund or dispute notifications, and Steam account or trade information relevant to the delivery you requested. We do not treat access to a public profile as permission to collect unrelated personal information.

## 4. Purposes and legal bases

| Purpose | Legal basis |
|---|---|
| Set up and operate your account; process an order; deliver an item; communicate about fulfilment | Performance of our contract with you, or steps you request before entering into it. |
| Handle order problems, refunds and customer enquiries | Contract performance; compliance with applicable consumer obligations where relevant. |
| Keep records required by accounting, tax or other applicable law; respond to valid legal requests | Compliance with a legal obligation. |
| Secure the website, investigate misuse, assess suspicious orders and protect accounts | Our legitimate interests in operating a reliable store and preventing fraud, balanced against your rights; legal obligations where a specific requirement applies. |
| Establish, exercise or defend legal claims and respond to payment disputes | Our legitimate interests in resolving disputes and protecting legal rights. |
| Record agreement to terms and immediate supply | Contract administration and our legitimate interest in demonstrating the transaction agreed; compliance with applicable legal record requirements. |

Where we rely on legitimate interests, we consider whether the processing is necessary and whether your interests or rights override ours. You can object on grounds relating to your particular situation.

An acknowledgement about immediate digital delivery is a consumer-contract requirement. It is not a blanket privacy consent.

## 5. Service messages and marketing

We use your contact details for account administration, order confirmations, delivery updates, security notices, support and other necessary service communications.

We do not send marketing newsletters or promotional email campaigns, and we do not use advertising cookies or marketing analytics on the website. Essential operational and security records are distinct from marketing analytics.

If we introduce an optional use of personal information in the future, we will first provide the relevant information and establish the required legal basis, including consent where required.

## 6. Who may receive information

We share information only as needed for a relevant purpose, including with these categories of recipients:

- Providers supporting website hosting, infrastructure, account functionality, transactional email and technical security.
- Payment processors, acquiring institutions, card issuers and card networks involved in authorising a payment, returning funds or resolving a dispute.
- The game platform and parties providing the item or technical fulfilment, to the extent needed to transfer the purchased item and verify delivery.
- Professional advisers, such as accountants and legal advisers, where access is necessary for their work.
- Courts, regulators, law-enforcement bodies and other authorities where disclosure is legally required or otherwise justified by law.
- A prospective or actual successor to the relevant business, subject to appropriate confidentiality and data-protection arrangements if a business transfer occurs.

Some recipients act on our instructions; others, such as a card issuer or game platform, may act as independent controllers for their own services. We limit disclosures to information relevant to the purpose. We do not sell your personal information for advertising.

## 7. International processing

Using an online store, international payment systems and a game platform can involve processing outside the United Kingdom or your country of residence. The protection available under local law may differ.

Where we arrange a restricted international transfer, we must have an appropriate legal basis for it. Depending on the destination and circumstances, this may involve an applicable adequacy decision or approved contractual safeguards, together with additional measures where needed. We do not rely on your acceptance of this Privacy Policy as a substitute for required transfer safeguards.

You may contact us for information about the destinations and safeguards relevant to your data, and to request a copy or explanation of applicable safeguards, subject to necessary redactions.

## 8. Retention

We retain information only for as long as reasonably necessary for the purpose for which it is held, including applicable legal requirements. The criteria differ by record type:

- Account information is needed while an account is active; after closure, only information still needed for outstanding transactions, obligations or justified claims is retained.
- Order, payment and refund records are retained for the accounting and tax periods applicable to the transaction and for relevant dispute or legal claim periods.
- Delivery and agreement records are retained to administer the purchase, establish what was agreed and resolve delivery or payment disputes.
- Support records are retained while an issue is open and for a proportionate period afterwards, considering the nature of the issue and any continuing claim.
- Technical and security records are retained for the operational or investigation period they support, with longer retention only where a specific incident or obligation justifies it.

A legal hold may require particular records to be retained while a dispute or investigation remains open. Once no lawful retention purpose remains, information is deleted or anonymised. Removing an account does not require immediate deletion of every related transaction record.

## 9. Security and payment information

We use safeguards appropriate to the information and risks involved. No online system can be guaranteed completely secure. Contact us promptly if you suspect an issue affecting your Coppedskins account or order.

Payment details required at checkout are handled through the payment process. Our support team does not need your card security code or online banking credentials. Do not include those details in messages or evidence submitted to us.

## 10. Your choices and rights

Depending on the law that applies and the circumstances, you may have rights to access your personal information, correct inaccurate information, request erasure, restrict processing, object to processing or receive certain information in a portable format. Where processing is based on consent, you may withdraw it without affecting earlier lawful processing.

These rights have conditions and exceptions. For example, we may need to retain transaction records despite a deletion request. We will explain any restriction that applies to your request.

You can submit a request to info@coppedskins.com. We may ask for proportionate information to verify your identity. Requests are normally free and will be handled within the applicable legal timeframe, ordinarily one month under UK data-protection law, subject to permitted extensions or other lawful adjustments. We will explain any applicable extension or fee.

You can complain to the UK Information Commissioner's Office at [ico.org.uk](https://ico.org.uk/make-a-complaint/), or to another competent data-protection authority available to you. You do not have to contact us first to exercise that right, although we welcome the opportunity to address your concern.

## 11. Required information and transaction checks

Certain account, payment and Steam delivery information is necessary to fulfil an order. If you do not provide the required information, we may be unable to accept or deliver the purchase. We will identify required fields in the relevant process.

Transactions may be subject to technical validation and security checks. A card issuer or payment processor may independently decline or authenticate a payment. If you believe a Coppedskins order restriction is incorrect, contact us to request a review and provide relevant information. We will explain the outcome as far as lawful security and confidentiality restrictions permit.

## 12. Age restrictions

The store is for people aged 18 and over. If you believe a person under 18 has provided personal information or placed an order, contact us so that we can investigate and take appropriate action, including addressing any records that must be retained by law.

## 13. Cookies and updates

Our [Cookie Policy](/policies/cookies) explains device storage used for the website. We may update this Privacy Policy when our operations or legal requirements change. Material changes will be brought to your attention where required, and the date at the top will be updated.

<!-- PUBLIC_DOCUMENT_END: privacy -->

---

<!-- PUBLIC_DOCUMENT_START: cookies -->
# Cookie Policy

Last updated: {{POLICY_EFFECTIVE_DATE}}

## 1. Who we are

This policy explains the use of cookies and similar device-storage technologies on **coppedskins.com**, operated by **WILDSTONE STUDIOS LTD**, company number **17358100**, of **Dept 6958, 196 High Road, Wood Green, London, United Kingdom, N22 8HH**. Contact: **info@coppedskins.com**.

## 2. What these technologies do

Cookies are small pieces of information stored in your browser. Similar technologies, such as browser local storage and session storage, can also preserve information needed for website functions. This policy covers those technologies where we use them, not just files labelled as cookies.

Session storage generally lasts for the relevant browsing session. Persistent storage remains until its configured expiry or until it is removed. Information about server-side account and transaction records is covered by our [Privacy Policy](/policies/privacy).

## 3. Our approach

We use device storage only where needed to provide requested store functions or another applicable legal exception permits it. Relevant functions include maintaining a login session, preserving a checkout in progress, protecting requests against abuse and recording a privacy choice where a control is provided.

We do not use advertising cookies, behavioural marketing tags or analytics tools to track browsing for audience measurement. We do not enable optional tracking merely because you continue browsing.

Not every convenient feature is automatically necessary. If a function would require consent, it must remain disabled until that consent has been obtained. If our use changes, we will update this policy and provide the appropriate choice before activating the relevant technology.

## 4. Consent and essential functions

Where device storage is strictly necessary for a service you explicitly request and the applicable law provides an exception, consent is not required for that purpose. Any exemption applies to the specific use, rather than granting permission for unrelated tracking.

You can control storage through your browser. Blocking necessary storage may prevent login, interrupt checkout or require you to enter information again. Rejecting optional technology, if any is introduced, will not be treated as a request to disable unrelated essential functionality.

## 5. Payment and game-platform interactions

Payment and delivery may require interaction with systems operated by other organisations. Those organisations can use their own technologies within their services. Their notices apply to their independent activities; this does not remove our responsibility for technologies that we cause to operate on our website.

## 6. Managing storage

Most browsers let you inspect stored data, delete individual cookies or site data, block future storage and set rules for particular websites. See your browser's settings for the options available.

Deleting browser storage does not itself delete your account, cancel an order or erase transaction records. Contact us if you want to make a personal-information request.

For questions about a specific storage entry, its purpose or its duration, email info@coppedskins.com with the entry name and website address. Do not send the contents of authentication or security cookies.

<!-- PUBLIC_DOCUMENT_END: cookies -->

---

<!-- PUBLIC_DOCUMENT_START: refunds -->
# Refund & Cancellation Policy

Last updated: {{POLICY_EFFECTIVE_DATE}}

## 1. Seller and scope

This policy applies to CS2 digital items purchased from **WILDSTONE STUDIOS LTD**, trading as **Coppedskins**, company number **17358100**, of **Dept 6958, 196 High Road, Wood Green, London, United Kingdom, N22 8HH**.

For cancellations, order problems or refund requests, contact **info@coppedskins.com**. This policy forms part of our [Terms & Conditions](/policies/terms).

**We do not offer a voluntary change-of-mind return after the correct item has been delivered. This does not affect a statutory cancellation right that remains available or your rights if the purchase was not properly fulfilled.**

## 2. Before acceptance and delivery

You can leave checkout before submitting an order. If you have already paid or submitted it, contact us promptly to request cancellation.

Before delivery, we will cancel and refund the order if the transfer can still be stopped safely. If a trade offer is pending or delivery may already have occurred, we first need to check the status. This does not postpone or remove a statutory cancellation right.

Simply rejecting or allowing a trade offer to expire does not reliably notify us that you wish to cancel. Send a clear cancellation request so that we can stop further delivery attempts and assess your order.

## 3. Statutory cancellation rights and immediate supply

Where the law gives you a cancellation period for digital content, you may cancel within that period unless the right has lawfully ended. For UK consumers, the ordinary period is 14 days from the day after the contract is made.

For immediate digital supply, we ask you before supply begins to expressly consent to starting during that period and acknowledge that you will lose the cancellation right once supply begins. We confirm that consent and acknowledgement in the order confirmation sent to you.

We rely on the loss of that right only where the applicable legal requirements have been met. Charging your card, starting an internal order review or including a general “no refunds” sentence in the Terms does not by itself satisfy those requirements.

If the required consent, acknowledgement or confirmation is missing, your rights are determined by applicable law; we will not assume they have ended merely because a trade occurred. Mandatory rights for an incorrect or otherwise non-conforming item continue regardless of a valid immediate-supply acknowledgement.

Where your statutory right remains available, you can exercise it by emailing a clear statement of cancellation. You may use the form in section 12, but it is not compulsory. Sending the request before the applicable deadline is sufficient. If the law gives you a longer period because required information was not provided, that longer period applies.

## 4. Change of mind after correct delivery

Subject to section 3 and other mandatory rights, we do not refund a correctly delivered item merely because:

- You no longer want it or selected a different item from the one you intended.
- Its market price changes or you find it cheaper elsewhere.
- You expected to sell it at a profit.
- Its appearance differs only because of display or rendering settings and its actual characteristics match the agreed description.
- A platform restriction accurately disclosed before purchase temporarily limits onward transfer or modification.

We do not offer a general 14-day satisfaction guarantee or a return scheme based on whether a delivered skin has been used in a game.

## 5. Non-delivery, unavailability and seller cancellation

If we cancel a paid order or cannot supply the purchased item, we will refund the amount paid for that item and any charge attributable solely to its unfulfilled delivery.

For a temporary delivery problem, we will investigate and, where reasonable, attempt delivery again. You do not have to accept an alternative item, an indefinite delay or store credit instead of a monetary refund to which you are entitled.

Where an agreed delivery deadline is missed, your cancellation and repayment rights depend on the agreed terms and applicable law. If a reasonable additional period is appropriate, we will explain it; we will not insist on an additional period where the law entitles you to cancel immediately.

If your receiving-account settings prevent delivery, we may ask you to correct them. If delivery still cannot be completed, we will assess cancellation and refund fairly, without an undisclosed penalty or automatic forfeiture of the price.

## 6. Incorrect or non-conforming items

Contact us if the item received does not match the accepted order or if there is another material fulfilment problem. Relevant differences can include the item identity, exterior, StatTrak or Souvenir status, or an individual attribute expressly promised in the listing.

We may ask for proportionate evidence such as the order number, trade reference and a screenshot of the item. We will also consider the delivery records available to us. Please avoid transferring or modifying a disputed item where reasonably possible while we investigate; this request does not remove your legal rights.

We will provide the remedy required by applicable law. Depending on the issue, this may include correcting delivery, replacement, a price reduction or a full refund. Under UK digital-content rules, repair or replacement may apply first, with a price reduction, potentially up to the full price, where the statutory conditions are met. If we had no right to supply the content, the applicable refund entitlement is preserved.

We will not require you to pursue an undisclosed supplier instead of dealing with us as seller. If return or recovery of an incorrect item is needed, we will provide verified instructions and will not require an additional purchase to obtain a remedy.

## 7. Steam trade protection and reversals

Steam's security mechanisms are separate from this refund policy. A reversal can change where an item is held without automatically completing the financial cancellation of the order.

If a trade is reversed, notify us with the relevant order and trade details. We will check whether the item returned to us or the supplying account, whether any replacement transfer occurred and whether a refund or payment dispute is already in progress.

If a reversal not caused by your misuse leaves you without the purchased item, we will arrange an appropriate remedy: renewed delivery where agreed and feasible, or a refund where the order cannot be fulfilled or the law requires repayment.

If you initiate a reversal, we will assess the reason and any applicable cancellation or security rights. We will not automatically treat every reversal as fraud. Where the item has been recovered and the order will not be fulfilled again, we will refund the amount due after verification. Any proposed deduction must have a lawful, clearly explained basis; we do not impose an automatic reversal penalty.

We may restrict future access in response to substantiated abuse, but a restriction does not itself cancel a valid repayment obligation. We will not retain both the recovered item and the full purchase price without a lawful basis.

## 8. Duplicate and unauthorised payments

If you believe you were charged twice for one order, contact us so that we can distinguish a duplicate completed payment from a temporary authorisation. A confirmed duplicate charge will be refunded.

If you suspect unauthorised card use, contact your card issuer promptly and let us know so that we can investigate and prevent further fulfilment where possible. Nothing in this policy restricts legitimate cardholder dispute rights.

## 9. How to request help

Email info@coppedskins.com with:

- Your order number and the email address used for the purchase.
- A short description of the issue and the outcome requested.
- The relevant trade or payment reference, if available.
- Supporting screenshots where useful, with unrelated personal information concealed.

An order number helps us locate a purchase but is not the only acceptable proof. Do not send passwords, authentication codes, card security codes or complete card numbers.

We will investigate without undue delay and tell you what information or next step is needed. A request is not rejected merely because you did not use a particular form or label.

## 10. Refund method, amount and timing

Refunds are made to the original payment method in the original transaction currency, unless another lawful arrangement is expressly agreed or the original route is unavailable. We do not require you to accept store credit instead of money where a monetary refund is due.

We initiate refunds without undue delay. For a valid UK statutory cancellation, repayment is due within 14 days after we are informed of the decision to cancel. For a UK digital-content price reduction, repayment is due within 14 days after we agree that you are entitled to it. Other mandatory deadlines take priority where applicable.

For a contractual refund under this policy where no shorter mandatory deadline applies, we will initiate repayment no later than 14 calendar days after confirming that the refund is due. We will not use an unnecessarily prolonged investigation to avoid a repayment deadline.

We do not charge a refund processing fee. Card issuers may take additional time to display a credit after we initiate it. If your card account uses another currency, your issuer's conversion rate can differ from the original rate; we refund the amount due in the order currency. This does not exclude reimbursement of a charge or loss where required by law.

## 11. Payment disputes and unresolved complaints

You are welcome to contact us first so that we can try to resolve an issue directly. Doing so is not a condition of exercising a statutory or cardholder right.

We may provide relevant order, payment, consent and delivery records to respond to a dispute. If both a refund request and a card dispute are open, we will coordinate the processes to avoid paying twice, without removing your entitlement to the amount properly due.

False claims intended to retain both an item and its price may be challenged. Genuine complaints and lawful disputes will not be treated as abuse merely because you raise them.

For an unresolved complaint, see the complaints and governing-law provisions in our Terms & Conditions.

## 12. Optional statutory cancellation form

Complete and send this form only if you wish to cancel a contract and have an applicable right to do so. You may instead send any other clear statement.

To: WILDSTONE STUDIOS LTD, Dept 6958, 196 High Road, Wood Green, London, United Kingdom, N22 8HH; info@coppedskins.com.

I/We hereby give notice that I/we cancel my/our contract for the supply of the following digital content:

- Item(s):
- Order number, if available:
- Ordered on:
- Consumer name(s):
- Consumer address:
- Email used for the order:
- Date:
- Signature of consumer(s), only if this form is sent on paper:

Delete wording that does not apply. Use of this form does not create a cancellation right where it has lawfully ended.

<!-- PUBLIC_DOCUMENT_END: refunds -->

---

<!-- PUBLIC_DOCUMENT_START: delivery -->
# Digital Item Delivery Policy

Last updated: {{POLICY_EFFECTIVE_DATE}}

## 1. Seller and delivery method

**WILDSTONE STUDIOS LTD**, trading as **Coppedskins**, company number **17358100**, of **Dept 6958, 196 High Road, Wood Green, London, United Kingdom, N22 8HH**, sells the digital items offered at **coppedskins.com**.

We deliver CS2 items to the Steam account specified for the order through the Steam trading system. No physical shipment, activation key or emailed redemption code is supplied. An email confirming an order is not the item itself.

Contact **info@coppedskins.com** for delivery assistance. This policy should be read with our [Terms & Conditions](/policies/terms) and [Refund & Cancellation Policy](/policies/returns).

## 2. Before you purchase

You need a Steam account that can receive the selected item and any account settings required by Steam for the transfer. Provide accurate account and trade information at checkout and check it before paying.

Account restrictions, security changes, an invalid trade URL or insufficient inventory capacity can prevent or delay delivery. We will explain any item-specific restriction known to us before purchase. You should also check the receiving account for restrictions shown by Steam.

Do not supply an account or trade URL that you are not authorised to use. Contact us immediately if you entered an incorrect destination. We cannot promise to redirect or recover a completed transfer, but will investigate any report and remain responsible where the error is ours.

## 3. Processing and timing

Fulfilment follows acceptance of the order and confirmation of payment, subject to necessary checks and any agreement about when digital supply may begin.

The delivery estimate and any known waiting period applicable to the selected item will be shown before purchase. We work to deliver within the stated period. Delivery can require you to accept a trade offer, so completion also depends on your response and Steam's availability.

An indication of fast delivery is not a guarantee that every transfer is instantaneous. If an unexpected issue affects the agreed timing, we will notify you through the available order or contact channel and explain the next step. Your rights if delivery fails or is unreasonably delayed are set out in the Refund & Cancellation Policy.

## 4. Receiving the item safely

Review the trade in Steam before accepting it. Check that the item matches your purchase and that the offer does not require you to give up unrelated items. If something looks wrong, do not accept it; contact us using the email on our website.

We will not ask you to send an additional skin or make a separate payment to “verify” or “unlock” an already paid delivery. We do not need your Steam password or authentication code.

If an offer expires or is rejected, contact us. We may be able to arrange another delivery attempt after checking that the original transfer did not complete. Do not accept competing or unexpected offers while the order is being investigated.

## 5. When delivery is complete

Delivery is complete when the correct item reaches the Steam account agreed for the order and the platform's records confirm the transfer.

Creating or sending a trade offer, assigning an item to an internal account or marking an order as processed does not by itself constitute delivery to your Steam inventory. We will investigate discrepancies between an order status and the underlying transfer record.

Completion does not remove remedies for a wrong item, a non-conforming supply or a later reversal that leaves the order unfulfilled.

## 6. Trade holds, protection and restrictions

Steam can impose different types of restriction, including a hold before a trade completes and protection or transfer limits after an item is received. These are not all the same and may affect delivery or onward use differently.

The relevant restriction and remaining period shown by Steam should be checked for the particular item and account. Platform rules can change, so we do not promise that every restriction lasts a fixed number of days or that an account setting removes all restrictions.

If a restriction will delay delivery and is known before purchase, it must be disclosed in the offer. We do not describe an item held only on our side as already delivered to your Steam account.

## 7. Problems and remedies

If an item has not arrived, check your order and Steam trade status, then contact us with the order number and relevant reference. We may ask you to correct receiving-account settings or confirm an outstanding offer.

If the item is unavailable or cannot be delivered, we will address cancellation and repayment. We will not substitute an item with materially different characteristics without your agreement.

If a trade is reversed, follow section 7 of the Refund & Cancellation Policy. Recovery of an item and repayment are checked separately so that the correct outcome can be established.

## 8. Availability by country

Delivery is subject to the service restrictions listed in section 3 of our Terms & Conditions, applicable law and technical availability. An accessible website does not itself mean that every order or receiving account is eligible.

<!-- PUBLIC_DOCUMENT_END: delivery -->

---

<!-- PUBLIC_DOCUMENT_START: payments -->
# Payment & Pricing Policy

Last updated: {{POLICY_EFFECTIVE_DATE}}

## 1. Who you pay

Your seller is **WILDSTONE STUDIOS LTD**, trading as **Coppedskins**, company number **17358100**, of **Dept 6958, 196 High Road, Wood Green, London, United Kingdom, N22 8HH**.

This policy applies to purchases at **coppedskins.com** and forms part of our [Terms & Conditions](/policies/terms). Payment questions can be sent to **info@coppedskins.com**.

## 2. Payment methods and currencies

We accept **Visa** and **Mastercard**. Purchases can be made in **EUR, GBP and USD**. The currency and final amount for your order are displayed before you confirm payment.

Acceptance of a card transaction remains subject to authorisation and any authentication requested by your issuer. We do not guarantee approval of every card.

Payments are for individual purchases. We do not offer a stored-value account, wallet top-ups, customer-to-customer money transfers or withdrawal of a cash balance.

## 3. Prices, taxes and charges

Review the final total before paying. Any applicable taxes or mandatory charges must be included in the total disclosed before you commit to the purchase. Optional extras, if offered, require your express selection and will not be added through preselected choices.

WILDSTONE STUDIOS LTD is not VAT registered. We do not issue VAT invoices claiming to have charged UK VAT. This statement does not mean that every transaction is exempt from all taxes in every country.

The price accepted for an order is not increased because the item's market value later rises. If a genuine and obvious error affects a listing or checkout total, we will contact you or cancel and refund the affected order as appropriate. We will not charge an additional amount without your agreement.

## 4. Currency conversion

The order currency may differ from the currency of your card account. Your bank or card issuer determines any exchange rate or fee it applies to that conversion or to an international transaction.

Coppedskins does not control those separate charges. A refund in the original transaction currency may convert into a different amount in your account currency. This does not restrict any compensation or reimbursement required by law.

## 5. Authorisation, collection and order acceptance

When you submit payment, the transaction may be authorised, authenticated, declined or held for review. An authorisation can appear as a pending amount before a final charge is completed.

Payment confirmation and order acceptance are related but distinct. A purchase contract is formed when we issue the Order Confirmation described in the Terms. We will not retain a collected payment for an order we decline, except where a legal restriction prevents repayment.

We do not start fulfilment solely because a pending authorisation appears. Where immediate digital supply requires your separate consent and acknowledgement, those must also be obtained before supply begins.

## 6. Failed, pending and duplicate payments

If checkout reports an error but your account shows a pending or completed transaction, check your order records or contact us before attempting repeated payments.

Your issuer controls the release of a temporary authorisation. If a payment was completed without a corresponding accepted order, we will reconcile it and arrange repayment where due. Confirmed duplicate charges for the same order will be refunded.

An unsuccessful payment does not guarantee continued availability of an item. If a further payment is needed, review the new checkout total before authorising it.

## 7. Authentication and security reviews

Use only a payment method you are authorised to use. Your issuer may require additional verification, such as approval through its own authentication process.

We may pause an order where proportionate checks are needed to investigate inconsistent details, suspected unauthorised use or a legal restriction. We may request relevant information, explain the next step where lawful and cancel if the issue cannot reasonably be resolved.

We do not ask you to email your complete card number, card security code or banking credentials. See our [Privacy Policy](/policies/privacy) for payment-related information handling.

## 8. Refunds and disputes

Eligibility, amounts and deadlines are governed by our [Refund & Cancellation Policy](/policies/returns). Refunds are normally made to the original payment method in the original order currency. We do not impose a refund processing fee.

You may contact us about an issue without giving up your cardholder rights. We may respond to a dispute with relevant transaction, order and delivery evidence. Where repayment has already been made through one route, we will reconcile the record to avoid a duplicate refund.

## 9. Location restrictions

The country restrictions in section 3 of our Terms & Conditions apply to purchases and payments. We may also decline or pause a transaction where required by applicable sanctions or another legal obligation. A location restriction is not an automatic basis for confiscating a payment for an unfulfilled order.

<!-- PUBLIC_DOCUMENT_END: payments -->

---

<!-- PUBLIC_DOCUMENT_START: company -->
# Company Information & Contact

**Coppedskins** is operated by **WILDSTONE STUDIOS LTD**.

| Detail | Information |
|---|---|
| Legal company name | WILDSTONE STUDIOS LTD |
| Company number | 17358100 |
| Company address | Dept 6958, 196 High Road, Wood Green, London, United Kingdom, N22 8HH |
| Website | [coppedskins.com](https://coppedskins.com) |
| Email | [info@coppedskins.com](mailto:info@coppedskins.com) |
| VAT status | Not VAT registered |

WILDSTONE STUDIOS LTD sells the products offered on Coppedskins in its own name. Purchases are of digital CS2 items delivered to the Steam account specified for the order.

## Orders, delivery and refunds

Email info@coppedskins.com with your order number, the email address used for the purchase and a short description of the issue. If you do not have the order number, provide enough information for us to locate the transaction.

Please do not send passwords, authentication codes, full card details or card security codes.

## Complaints

Send your complaint to the same email address and explain what happened and the resolution you seek. We will investigate, request relevant information where necessary and explain our response. If the matter remains unresolved, we will provide any further dispute-resolution information required by law.

## Privacy requests

For a request about personal information, use the same contact details and identify the message as a privacy request. See our [Privacy Policy](/policies/privacy) for information about your rights.

## Store policies

Read our [Terms & Conditions](/policies/terms), [Refund & Cancellation Policy](/policies/returns), [Digital Item Delivery Policy](/policies/shipping), [Payment & Pricing Policy](/policies/payment), [Privacy Policy](/policies/privacy) and [Cookie Policy](/policies/cookies).

Coppedskins is not affiliated with or endorsed by Valve Corporation. Third-party trademarks and game assets belong to their respective rights holders.

<!-- PUBLIC_DOCUMENT_END: company -->

---

<!-- PUBLIC_DOCUMENT_START: index -->
# Policies

Information about shopping with Coppedskins, digital delivery, payments and your privacy.

- [Terms & Conditions](/policies/terms) — account eligibility, purchases and the terms of your contract with us.
- [Refund & Cancellation Policy](/policies/returns) — cancellations, delivery problems, consumer remedies and repayment.
- [Digital Item Delivery Policy](/policies/shipping) — how your CS2 item reaches your Steam account.
- [Payment & Pricing Policy](/policies/payment) — payment methods, currencies and transaction information.
- [Privacy Policy](/policies/privacy) — how we handle personal information and how to exercise your rights.
- [Cookie Policy](/policies/cookies) — cookies, browser storage and your choices.
- [Company Information & Contact](/contact) — seller details and how to reach us.

Questions? Email [info@coppedskins.com](mailto:info@coppedskins.com).

<!-- PUBLIC_DOCUMENT_END: index -->

---

## INTERNAL — Тексты интерфейса и подтверждения заказа

Эти блоки размещаются в указанных компонентах, а не отдельной политикой. Переменные `{{...}}` здесь — динамические данные заказа, которые должны подставляться из системы. Не выводить пользователю фигурные скобки.

### UI-01 — Принятие условий и возраст, отдельный обязательный checkbox

> I confirm that I am at least 18 years old and agree to the Terms & Conditions, including the Payment & Pricing, Digital Item Delivery and Refund & Cancellation Policies.

Названия документов сделать ссылками. Checkbox изначально пустой. Рядом, вне checkbox:

> Read our Privacy Policy to learn how we handle your information.

Privacy Policy не оформлять как обязательное согласие на всю обработку данных.

### UI-02 — Немедленная поставка, отдельный checkbox

> I expressly consent to the supply of my digital item beginning before the end of any applicable 14-day cancellation period. I acknowledge that I will lose my statutory right to cancel once supply begins. This does not affect my rights if the item is not supplied as agreed.

Checkbox изначально пустой; не объединять с UI-01 и не подменять нажатием Pay. Сохранять текст, версию, дату/время и привязку к заказу. Само наличие checkbox не доказывает фактического начала supply. Нужна отдельная запись события поставки. Применимость и момент начала supply проверить по фактической цепочке передачи предмета.

### UI-03 — Краткое уведомление перед оплатой

> Digital CS2 item delivered to your Steam account. No physical shipment or activation code. No voluntary change-of-mind returns after correct delivery. Statutory rights remain unaffected.

Показывать рядом: предмет и существенные характеристики, receiving Steam account, итоговая сумма и валюта, срок/оценка доставки, известные ограничения.

Кнопка:

> Pay {{ORDER_TOTAL}} {{ORDER_CURRENCY}}

### UI-04 — Подтверждение принятого заказа по email

Subject: Your Coppedskins order {{ORDER_NUMBER}} is confirmed

> Thank you for your purchase. WILDSTONE STUDIOS LTD has accepted your order.
>
> Order: {{ORDER_NUMBER}}  
> Item: {{ITEM_DESCRIPTION}}  
> Amount paid: {{ORDER_TOTAL}} {{ORDER_CURRENCY}}  
> Receiving Steam account: {{STEAM_ACCOUNT_REFERENCE}}  
> Delivery information: {{ORDER_DELIVERY_INFORMATION}}
>
> Your item will be delivered through Steam. Check the contents of the trade offer before accepting it.
>
> Questions about this order? Contact info@coppedskins.com.
>
> WILDSTONE STUDIOS LTD · Company number 17358100  
> Dept 6958, 196 High Road, Wood Green, London, United Kingdom, N22 8HH

Если UI-02 действительно принят, добавить:

> At checkout, you expressly consented to digital supply beginning before the end of any applicable 14-day cancellation period and acknowledged that your statutory cancellation right would end once supply begins. Your rights if the item is not supplied as agreed are unaffected.

К письму приложить либо включить сохраняемую копию согласованной версии purchase terms и существенных условий заказа. Одной ссылки на изменяемую страницу недостаточно для надёжного подтверждения согласованных условий. Не отправлять это письмо как Order Confirmation до фактического принятия заказа. Не указывать «delivered», пока доставка не подтверждена.

### UI-05 — Footer

> © {{CURRENT_YEAR}} Coppedskins. Operated by WILDSTONE STUDIOS LTD · Company number 17358100.  
> Dept 6958, 196 High Road, Wood Green, London, United Kingdom, N22 8HH.  
> info@coppedskins.com · 18+  
> Not affiliated with or endorsed by Valve Corporation. Third-party trademarks and game assets belong to their respective rights holders.

Добавить ссылки на все страницы из карты. Не публиковать Company No. COMPANY NUMBER, старый Nottingham-адрес, CHANGE IT UP SERVICES LTD или ULTRASENS.

### UI-06 — How It Works: заменить три шага

**1. Choose your skin**  
Review the item, its listed characteristics and any delivery restrictions before adding it to your order.

**2. Check out**  
Confirm your receiving Steam account and pay by Visa or Mastercard in EUR, GBP or USD. Your final total is shown before payment.

**3. Receive it on Steam**  
Follow the delivery instructions and check the trade offer before accepting it. Delivery is complete when the correct item reaches your Steam inventory.

### UI-07 — FAQ: возвраты

**Can I return a skin after receiving it?**  
We do not offer change-of-mind returns after correct delivery. If your item was not delivered, does not match your order or you have another applicable consumer right, contact info@coppedskins.com. See our Refund & Cancellation Policy for details.

**How long does delivery take?**  
Check the delivery information shown for your item before purchase. Completion can depend on payment confirmation, your acceptance of the trade offer and Steam restrictions. Contact us if the stated delivery period has passed.

**Do I receive a code?**  
No. Your purchase is a digital CS2 item delivered to your Steam account through a trade.

### UI-08 — Cookie information, только после проверки реализации

> We use necessary cookies and similar storage to operate the store and protect your session. We do not use advertising or analytics cookies. Read our Cookie Policy.

Для действительно necessary-only реализации не создавать фиктивный выбор «Accept all / Reject all» с несуществующими категориями. Информационный элемент можно закрыть кнопкой `Got it`. Если найдены необязательные технологии, сначала определить применимый режим и исправить реализацию; этот текст не использовать как универсальное оправдание всех cookies.

---

## INTERNAL — Проверки перед публикацией

Публичные документы выше полностью написаны. Следующие пункты обозначают факты, которые нельзя подтвердить из переписки или одного просмотра сайта. Это конкретные проверки внедрения, а не разрешение придумывать данные.

| ID | Что проверить | Действие агента |
|---|---|---|
| V01 | Состав данных и фактическая архитектура | Сопоставить Privacy §§2–6 с полями регистрации, checkout, Steam-интеграцией, журналами и реальными категориями получателей. Удалить неприменимое, добавить существенное подтверждённое. Не утверждать отсутствие хранения полного PAN, пока это не проверено. |
| V02 | Международные передачи | Установить реальные страны обработки и используемые механизмы передачи. Уточнить Privacy §7 этими фактами; не считать общий текст доказательством наличия safeguards. Проверить необходимость представителя в ЕС и, если применимо, добавить реальные контакты. |
| V03 | Автоматизированные решения | Установить, есть ли исключительно автоматизированные отказы с юридическими или аналогично существенными последствиями. Если есть — дополнить Privacy §11 логикой, значением, последствиями и применимыми правами; общий текст про проверки не заменяет такое раскрытие. |
| V04 | Сроки хранения | Проверить обоснованные критерии из Privacy §8 и фактические процессы удаления/анонимизации. Где сроки определены, добавить конкретные периоды по категориям. Не подставлять произвольные «6 лет для всего» или «30 дней для всех логов». |
| V05 | Cookies и browser storage | Проверить незалогиненный сайт, регистрацию, кабинет, checkout и интеграции. До публикации дополнить Cookie Policy реальным инвентарём: имя/идентификатор, домен или категория оператора, назначение, срок, тип storage, основание/категория. Не публиковать пустую таблицу или примерные имена. Отключить аналитику, рекламу и лишние теги согласно решению владельца. |
| V06 | Срок доставки | Установить реальный срок или оценку по типам доступных предметов и показать до оплаты; синхронизировать письмо. Не оставлять пустой или отсутствующий delivery estimate. Не обещать «в секунды» без подтверждения. |
| V07 | Передача и откаты | Проверить источник предметов, контроль trade records, обработку seller-side и buyer-side reversal, реальную возможность recovery и re-delivery. Сохранить ответственность WILDSTONE как продавца. Политика не должна обещать невозможную автоматическую обработку. |
| V08 | Немедленная поставка | Реализовать UI-01 и UI-02, записи согласия и версий, подтверждение по email до/при поставке. Согласовать фактический момент начала digital supply; card authorisation не использовать вместо него. |
| V09 | Отмена без немедленной поставки | Реализовать честный сценарий при непринятом UI-02. Не запускать поставку без согласия и не объявлять автоматически, что право на отказ утрачено. |
| V10 | Реквизиты и налоги | Использовать реквизиты владельца; адрес не назван в тексте registered office без отдельной проверки. Проверить актуальность в реестре перед запуском. Проверить налоговый режим международных цифровых продаж; отсутствие UK VAT-регистрации не заменяет этот анализ. |
| V11 | Ограничения стран | Внедрить перечисленные ограничения в checkout и eligibility checks. Демократическую Республику Конго не путать с Республикой Конго. Не называть весь список санкционным. |
| V12 | Платежи и возвраты | Проверить соответствие отдельных платежей и возвратов исходной карте/валюте, отсутствие кошелька, возможность выполнить обещанный срок инициирования возврата, учёт двойных списаний и card disputes. |
| V13 | Complaints/ADR | Определить обязательства по ADR и процедуру ответа на неурегулированную жалобу. Не добавлять выдуманное членство в схеме, адрес органа или устаревшую ссылку на EU ODR. |
| V14 | Контент сайта | Удалить Drop alerts и newsletter signup. Убрать неподтверждённые «buyer protection end to end», «verified sellers», «no hold», фиксированные неверные сроки и заявления о гарантированной мгновенной доставке. Синхронизировать About, FAQ, баннеры и карточки. |

### Шаблон для технического инвентаря cookies — НЕ ПУБЛИКОВАТЬ пустым

| Actual identifier | Domain/operator category | Technology | Purpose | Actual expiry | Necessary/other legal basis |
|---|---|---|---|---|---|

Заполненную и проверенную таблицу вставить в Cookie Policy после раздела 3. При отсутствии конкретной технологии не добавлять строку «на всякий случай». Если строгий запрет на публичное название подрядчика конфликтует с обязательным раскрытием, обозначить владельцу точное требование; не скрывать обязательную информацию и не выдумывать псевдонимы.

### Контроль качества после размещения

- Все восемь PUBLIC_DOCUMENT-блоков извлечены без внутренних комментариев.
- Единые реквизиты, email, дата, наименование продавца и политика возвратов на всех страницах.
- Работают семь ссылок из индекса и ссылки из footer/checkout.
- Нет остатков старого продавца, ULTRASENS, ключей как товара или физической доставки.
- Нет добровольного «14-day return of unused skins» и абсолютного «no refunds under any circumstances».
- No-refund правило после корректной доставки не отменяет законные remedies, право на отказ без действительного согласия или возврат при недоставке.
- Нельзя получить отмену заказа только изменением UI-статуса без проверки item/payment records.
- Не смешаны pending authorisation, Order Confirmation, supply started, offer sent и delivery completed.
- Нет фиктивного согласия на Privacy Policy как единственного правового основания обработки.
- Проверены реальные cookies, transfers, automated decisions и сроки хранения; unresolved-пункты явно сообщены владельцу, а не скрыты.
- Замена `{{POLICY_EFFECTIVE_DATE}}` выполнена только фактической датой запуска; шаблоны заказа получают реальные данные.

## INTERNAL — Источники и основания редакционных решений

Источники проверены при подготовке 17 September 2026. Это исследовательские ссылки для агента; не добавлять таблицу в публичные политики. Тексты являются самостоятельным проектом условий Coppedskins, а не копиями документов конкурентов. Практика конкурентов не подтверждает законность каждого их положения.

| Источник | Что использовано |
|---|---|
| [GOV.UK — Online selling](https://www.gov.uk/online-and-distance-selling-for-businesses/online-selling) | Преддоговорная информация, подтверждение договора, необходимость согласия на немедленную цифровую поставку и подтверждения утраты cancellation right. |
| [Business Companion — Digital content](https://www.businesscompanion.info/en/quick-guides/digital/digital-content) | Разделение change-of-mind cancellation и remedies за несоответствующий цифровой контент. |
| [ICO — Right to be informed](https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/individual-rights/individual-rights/right-to-be-informed/) | Перечень тем privacy notice и возможность раскрытия категорий получателей. |
| [ICO — Storage and access technologies](https://ico.org.uk/for-organisations/direct-marketing-and-privacy-and-electronic-communications/guidance-on-the-use-of-storage-and-access-technologies/) | Актуальное руководство, обновлённое 29 April 2026; необходимость проверить storage по назначению и применимому исключению. |
| [Steam — Trade Protected Items](https://help.steampowered.com/en/faqs/view/365F-4BEE-2AE2-7BDD) | Trade protection и reversal отличаются от обычного коммерческого возврата. В текущем FAQ указан 7-дневный период, но в публичных политиках срок не зафиксирован навсегда. |
| [Steam — Trade and Market Holds](https://help.steampowered.com/en/faqs/view/34A1-EA3F-83ED-54AB) | Security holds не смешиваются с post-delivery trade protection. |
| [CS.MONEY — Refund Policy](https://cs.money/uk/refund/) | Рыночный ориентир: отсутствие обычного возврата завершённых сделок и отдельное рассмотрение недоставки. Условия кошелька, невозвратных методов оплаты и конкретные сроки не перенесены. |
| [DMarket — Terms](https://dmarket.com/terms-of-use) и [Trade protection](https://support.dmarket.com/hc/en-us/articles/43418188891793-How-trade-protection-affects-targets) | Сопоставление общего запрета возвратов с отдельной обработкой откатов. Модель возврата на внутренний баланс не перенесена. |

Законодательные ссылки для последующей юридической проверки: Consumer Contracts Regulations 2013, regulations 16, 30, 34 и 37; Consumer Rights Act 2015, Part 1 Chapter 3. Прямое извлечение отдельных страниц legislation.gov.uk при подготовке было ограничено ошибками доступа; соответствующие положения сверялись с приведёнными официальными и Trading Standards guidance, а не объявлялись результатом полного правового аудита всех стран продаж.
