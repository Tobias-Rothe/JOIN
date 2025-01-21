import returnIcon from "../icons.js";
import { getAuthUser } from "../firebase.js";

document.addEventListener("DOMContentLoaded", async () => {
  window.handleBack = handleBack;

  let contentRef;
  while ((contentRef = document.querySelector(".content")) === null) {
    await new Promise((resolve) => setTimeout(resolve, 100));
  }

  const urlPath = window.location.pathname;

  const user = await getAuthUser();

  function handleBack() {
    if (user) {
      window.location.href = "/summary.html";
    } else {
      window.location.href = "/";
    }
  }

  if (urlPath === "/help.html") {
    contentRef.innerHTML = /*html*/ `
            <div class="help-privacy-legal">
                <div class="heading"><h1>Help</h1><button onclick="handleBack()">${returnIcon(
                  "arrow-left"
                )}</button></div>
                <div class="inner-content">
                    <p>Welcome to the help page for <span>Join</span>, your guide to using our kanban project management tool. Here, we'll provide an overview of what <span>Join</span> is, how it can benefit you, and how to use it.</p>
                    <h2>What is Join?</h2>
                    <p><span>Join</span> is a kanban-based project management tool designed and built by a group of dedicated students as part of their web development bootcamp at the Developer Akademie.</p>
                    <p>Kanban, a Japanese term meaning "billboard", is a highly effective method to visualize work, limit work-in-progress, and maximize efficiency (or flow). <span>Join</span> leverages the principles of kanban to help users manage their tasks and projects in an intuitive, visual interface.</p>
                    <p>It is important to note that <span>Join</span> is designed as an educational exercise and is not intended for extensive business usage. While we strive to ensure the best possible user experience, we cannot guarantee consistent availability, reliability, accuracy, or other aspects of quality regarding Join.</p>
                    <h2>How to use it</h2>
                    <p>Here is a step-by-step guide on how to use <span>Join</span>:</p>
                    <ol>
                        <li>
                            <h3>Exploring the Board</h3>
                            <p>When you log in to <span>Join</span>, you'll find a default board. This board represents your project and contains four default lists: "To Do", "In Progress", “Await feedback” and "Done".</p>
                        </li>
                        <li>
                            <h3>Creating Contacts</h3>
                            <p>In <span>Join</span>, you can add contacts to collaborate on your projects. Go to the "Contacts" section, click on "New contact", and fill in the required information. Once added, these contacts can be assigned tasks and they can interact with the tasks on the board.</p>
                        </li>
                        <li>
                            <h3>Adding Cards</h3>
                            <p>Now that you've added your contacts, you can start adding cards. Cards represent individual tasks. Click the "+" button under the appropriate list to create a new card. Fill in the task details in the card, like task name, description, due date, assignees, etc.</p>
                        </li>
                        <li>
                            <h3>Moving Cards</h3>
                            <p>As the task moves from one stage to another, you can reflect that on the board by dragging and dropping the card from one list to another.</p>
                        </li>
                        <li>
                            <h3>Deleting Cards</h3>
                            <p>Once a task is completed, you can either move it to the "Done" list or delete it. Deleting a card will permanently remove it from the board. Please exercise caution when deleting cards, as this action is irreversible.</p>
                            <p>Remember that using <span>Join</span> effectively requires consistent updates from you and your team to ensure the board reflects the current state of your project.</p>
                            <p>Have more questions about <span>Join</span>? Feel free to contact us at [Your Contact Email]. We're here to help you!</p>
                        </li>
                    </ol>
                    <h2>Enjoy using Join!</h2>
                </div>
            </div>
        `;
  }

  if (urlPath === "/legal-notice.html") {
    contentRef.innerHTML = /*html*/ `
            <div class="help-privacy-legal">
                <div class="heading"><h1>Legal Notice</h1><button onclick="handleBack()">${returnIcon(
                  "arrow-left"
                )}</button></div>
                <div class="inner-content">
                    <h2>Imprint</h2>
                    <ul>
                        <li>Marcel Schmidt, Phillip Anstett, Tobias Rothe</li>
                        <li>Robert-Sommer-Straße 32</li>
                        <li>35392 Gießen</li>
                    </ul>
                    <h3>Exploring the Board</h3>
                    <p>Email: <a href="mailto: contact@marcel-schmidt.dev">contact@marcel-schmidt.dev</a></p>
                    <h3>Acceptance of terms</h3>
                    <p>By accessing and using <span>Join</span> (Product), you acknowledge and agree to the following terms and conditions, and any policies, guidelines, or amendments thereto that may be presented to you from time to time. We, the listed students, may update or change the terms and conditions from time to time without notice.</p>
                    <h3>Scope and ownership of the product</h3>
                    <p><span>Join</span> has been developed as part of a student group project in a web development bootcamp at the <span>Developer Akademie GmbH</span>. It has an educational purpose and is not intended for extensive personal & business usage. As such, we cannot guarantee consistent availability, reliability, accuracy, or any other aspect of quality regarding this Product.</p>
                    <p>The design of <span>Join</span> is owned by the <span>Developer Akademie GmbH</span>. Unauthorized use, reproduction, modification, distribution, or replication of the design is strictly prohibited.</p>
                    <h3>Proprietary rights</h3>
                    <p>Aside from the design owned by <span>Developer Akademie GmbH</span>, we, the listed students, retain all proprietary rights in <span>Join</span>, including any associated copyrighted material, trademarks, and other proprietary information.</p>
                    <h3>Use of the product</h3>
                    <p><span>Join</span> is intended to be used for lawful purposes only, in accordance with all applicable laws and regulations. Any use of Join for illegal activities, or to harass, harm, threaten, or intimidate another person, is strictly prohibited. You are solely responsible for your interactions with other users of <span>Join</span>.</p>
                    <h3>Disclaimer of warranties and limitation of liability</h3>
                    <p>Join is provided "as is" without warranty of any kind, whether express or implied, including but not limited to the implied warranties of merchantability, fitness for a particular purpose, and non-infringement. In no event will we, the listed students, or the <span>Developer Akademie</span>, be liable for any direct, indirect, incidental, special, consequential or exemplary damages, including but not limited to, damages for loss of profits, goodwill, use, data, or other intangible losses, even if we have been advised of the possibility of such damages, arising out of or in connection with the use or performance of <span>Join</span>.</p>
                    <h3>Indemnity</h3>
                    <p>You agree to indemnify, defend and hold harmless us, the listed students, the <span>Developer Akademie</span>, and our affiliates, partners, officers, directors, agents, and employees, from and against any claim, demand, loss, damage, cost, or liability (including reasonable legal fees) arising out of or relating to your use of <span>Join</span> and/or your breach of this Legal Notice.</p>
                    <p>For any questions or notices, please contact us at <a href="mailto:info@developerakademie.com">info@developerakademie.com</a>.</p>
                    <p>Date: July 26, 2023</p>
                </div>
            </div>
        `;
  }

  if (urlPath === "/privacy-policy.html") {
    contentRef.innerHTML = /*html*/ `
            <div class="help-privacy-legal">
                <div class="heading"><h1>Privacy Policy</h1><button onclick="handleBack()">${returnIcon(
                  "arrow-left"
                )}</button></div>
                <div class="inner-content">
                    <h2>1. Overview of Data Protection</h2>
                    <h3>General Information</h3>
                    <p>The following notes provide a simple overview of what happens to your personal data when you visit this website. Personal data is any data by which you can be personally identified. Detailed information on data protection can be found in our privacy policy below this text.</p>

                    <h3>Data Collection on This Website</h3>
                    <h4>Who is responsible for data collection on this website?</h4>
                    <p>The data processing on this website is carried out by the website operator. You can find the contact details of the operator in the section "Notice Regarding the Responsible Party" in this privacy policy.</p>

                    <h4>How do we collect your data?</h4>
                    <p>Your data is collected when you provide it to us. This can be, for example, data that you enter in a contact form.</p>
                    <p>Other data is collected automatically or with your consent when you visit the website by our IT systems. This includes technical data (e.g., internet browser, operating system, or the time of page access). This data is collected automatically as soon as you enter this website.</p>

                    <h4>What do we use your data for?</h4>
                    <p>Part of the data is collected to ensure the proper functioning of the website. Other data can be used to analyze your user behavior. If contracts are concluded or initiated through the website, the data provided is also processed for contract offers, orders, or other inquiries.</p>

                    <h4>What rights do you have regarding your data?</h4>
                    <p>You have the right to receive information free of charge at any time about the origin, recipient, and purpose of your stored personal data. You also have the right to request the correction or deletion of this data. If you have given your consent to data processing, you can revoke this consent at any time for the future. Furthermore, you have the right to request the restriction of the processing of your personal data under certain circumstances. You also have the right to lodge a complaint with the competent supervisory authority.</p>
                    <p>For this and other questions regarding data protection, you can contact us at any time.</p>

                    <h2>2. Hosting</h2>
                    <p>We host the content of our website with the following provider:</p>

                    <h3>External Hosting</h3>
                    <p>This website is hosted externally. The personal data collected on this website is stored on the servers of the hosting provider(s). This may include IP addresses, contact inquiries, meta and communication data, contract data, contact details, names, website accesses, and other data generated via a website.</p>
                    <p>External hosting is performed for the purpose of fulfilling contracts with our potential and existing customers (Art. 6(1)(b) GDPR) and in the interest of a secure, fast, and efficient provision of our online offering by a professional provider (Art. 6(1)(f) GDPR). If a corresponding consent was requested, the processing is carried out exclusively based on Art. 6(1)(a) GDPR and &sect; 25(1) TDDG, insofar as the consent includes the storage of cookies or access to information on the user's device (e.g., device fingerprinting) as defined by TDDG. The consent can be revoked at any time.</p>
                    <p>Our hosting provider(s) will only process your data to the extent necessary to fulfill their service obligations and follow our instructions regarding this data.</p>
                    <p>We use the following hosting provider(s):</p>
                    <p>Neue Medien Muennich GmbH<br>
                    Hauptstrasse 68<br>
                    02742 Friedersdorf - Germany<br>
                    Phone: +49 3587235310</p>

                    <h2>3. General Information and Mandatory Information</h2>
                    <h3>Data Protection</h3>
                    <p>The operators of these pages take the protection of your personal data very seriously. We treat your personal data confidentially and in accordance with the statutory data protection regulations and this privacy policy.</p>
                    <p>When you use this website, various personal data is collected. Personal data is data by which you can be personally identified. This privacy policy explains what data we collect and what we use it for. It also explains how and for what purpose this happens.</p>
                    <p>We would like to point out that data transmission over the Internet (e.g., communication via email) can have security gaps. Complete protection of data against access by third parties is not possible.</p>

                    <h3>Notice Regarding the Responsible Party</h3>
                    <p>The responsible party for data processing on this website is:</p>
                    <p>Developer Akademie GmbH<br>
                    Tassiloplatz 25,<br>
                    81541 Munich</p>

                    <p>Email: info@developerakademie.com</p>
                    <p>The responsible party is the natural or legal person who, alone or jointly with others, decides on the purposes and means of processing personal data (e.g., names, email addresses, etc.).</p>

                    <h3>Storage Period</h3>
                    <p>Unless a specific storage period is mentioned within this privacy policy, your personal data will remain with us until the purpose for data processing no longer applies. If you make a legitimate request for deletion or revoke your consent to data processing, your data will be deleted unless we have other legally permissible reasons for storing your personal data (e.g., tax or commercial law retention periods); in the latter case, the deletion takes place after these reasons cease to exist.</p>

                    <h3>General Information on the Legal Basis for Data Processing on This Website</h3>
                    <p>If you have consented to data processing, we process your personal data based on Art. 6(1)(a) GDPR or Art. 9(2)(a) GDPR if special data categories according to Art. 9(1) GDPR are processed. In the case of explicit consent to the transfer of personal data to third countries, data processing is also based on Art. 49(1)(a) GDPR. If you have consented to the storage of cookies or access to information on your device (e.g., via device fingerprinting), data processing is also carried out based on &sect; 25(1) TDDG. The consent can be revoked at any time. If your data is required for the fulfillment of a contract or pre-contractual measures, we process your data based on Art. 6(1)(b) GDPR. Furthermore, we process your data if necessary to fulfill a legal obligation based on Art. 6(1)(c) GDPR. Data processing can also be carried out based on our legitimate interest according to Art. 6(1)(f) GDPR. Information on the relevant legal bases in each individual case is provided in the following sections of this privacy policy.</p>

                    <h3>Recipients of Personal Data</h3>
                    <p>In the course of our business activities, we work with various external parties. This sometimes requires the transfer of personal data to these external parties. We only share personal data if it is necessary for the fulfillment of a contract, if we are legally obligated to do so (e.g., data transfer to tax authorities), if we have a legitimate interest in the transfer according to Art. 6(1)(f) GDPR, or if another legal basis permits data sharing. When using data processors, we only transfer personal data to our customers based on a valid data processing contract. In the case of joint processing, a joint processing agreement is concluded.</p>

                    <h3>Revocation of Your Consent to Data Processing</h3>
                    <p>Many data processing operations are only possible with your express consent. You can revoke consent you have already given at any time. The legality of the data processing carried out until the revocation remains unaffected by the revocation.</p>

                    <h3>Right to Object to Data Collection in Special Cases and to Direct Advertising (Art. 21 GDPR)</h3>
                    <p>IF DATA PROCESSING IS CARRIED OUT BASED ON ART. 6(1)(E) OR (F) GDPR, YOU HAVE THE RIGHT TO OBJECT TO THE PROCESSING OF YOUR PERSONAL DATA AT ANY TIME FOR REASONS ARISING FROM YOUR PARTICULAR SITUATION; THIS ALSO APPLIES TO PROFILING BASED ON THESE PROVISIONS. THE RESPECTIVE LEGAL BASIS ON WHICH PROCESSING IS BASED CAN BE FOUND IN THIS PRIVACY POLICY. IF YOU OBJECT, WE WILL NO LONGER PROCESS YOUR AFFECTED PERSONAL DATA UNLESS WE CAN DEMONSTRATE COMPELLING LEGITIMATE GROUNDS FOR PROCESSING THAT OVERRIDE YOUR INTERESTS, RIGHTS, AND FREEDOMS OR THE PROCESSING SERVES THE ASSERTION, EXERCISE, OR DEFENSE OF LEGAL CLAIMS (OBJECTION PURSUANT TO ART. 21(1) GDPR).</p>
                    <p>IF YOUR PERSONAL DATA IS PROCESSED FOR DIRECT ADVERTISING, YOU HAVE THE RIGHT TO OBJECT AT ANY TIME TO THE PROCESSING OF PERSONAL DATA CONCERNING YOU FOR SUCH ADVERTISING; THIS ALSO APPLIES TO PROFILING INSOFAR AS IT IS ASSOCIATED WITH SUCH DIRECT ADVERTISING. IF YOU OBJECT, YOUR PERSONAL DATA WILL NO LONGER BE USED FOR DIRECT ADVERTISING (OBJECTION PURSUANT TO ART. 21(2) GDPR).</p>

                    <h3>Right to Lodge a Complaint with the Competent Supervisory Authority</h3>
                    <p>In the event of violations of the GDPR, data subjects have the right to lodge a complaint with a supervisory authority, in particular in the Member State of their habitual residence, their place of work, or the place of the alleged infringement. The right to lodge a complaint exists without prejudice to other administrative or judicial remedies.</p>

                    <h3>Right to Data Portability</h3>
                    <p>You have the right to have data that we process based on your consent or in performance of a contract automatically delivered to you or to a third party in a commonly used, machine-readable format. If you request the direct transfer of the data to another responsible party, this will only be done to the extent technically feasible.</p>

                    <h3>Information, Rectification, and Erasure</h3>
                    <p>Within the scope of the applicable statutory provisions, you have the right at any time to obtain information about your stored personal data, its origin, recipients, and the purpose of data processing and, if necessary, a right to rectification or erasure of this data. For this purpose, as well as for further questions on the subject of personal data, you can contact us at any time.</p>

                    <h3>Right to Restriction of Processing</h3>
                    <p>You have the right to request the restriction of the processing of your personal data. To do this, you can contact us at any time. The right to restriction of processing applies in the following cases:</p>
                    <ul>
                        <li>If you dispute the accuracy of your personal data stored by us, we usually need time to verify this. For the duration of the verification, you have the right to request the restriction of the processing of your personal data.</li>
                        <li>If the processing of your personal data was/is unlawful, you can request the restriction of data processing instead of deletion.</li>
                        <li>If we no longer need your personal data, but you need it to exercise, defend, or assert legal claims, you have the right to request restriction of the processing of your personal data instead of deletion.</li>
                        <li>If you have filed an objection pursuant to Art. 21(1) GDPR, a balance must be struck between your and our interests. As long as it has not yet been determined whose interests prevail, you have the right to request the restriction of the processing of your personal data.</li>
                    </ul>
                    <p>If you have restricted the processing of your personal data, such data – apart from being stored – may only be processed with your consent or for the assertion, exercise, or defense of legal claims or for the protection of the rights of another natural or legal person or for reasons of an important public interest of the European Union or a Member State.</p>

                    <h2>4. Data Collection on This Website</h2>
                    <h3>Cookies</h3>
                    <p>Our websites use so-called “cookies.” Cookies are small data packets and do not cause any damage to your device. They are stored either temporarily for the duration of a session (session cookies) or permanently (permanent cookies) on your device. Session cookies are automatically deleted after your visit ends. Permanent cookies remain stored on your device until you delete them yourself or an automatic deletion by your web browser occurs.</p>
                    <p>Cookies can originate from us (first-party cookies) or from third-party companies (third-party cookies). Third-party cookies enable the integration of certain services of third-party companies within websites (e.g., cookies for handling payment services).</p>
                    <p>Cookies have various functions. Many cookies are technically necessary, as certain website functions would not work without them (e.g., the shopping cart function or displaying videos). Other cookies can be used to evaluate user behavior or for advertising purposes.</p>
                    <p>Cookies that are necessary to carry out the electronic communication process, to provide certain functions requested by you (e.g., for the shopping cart function), or to optimize the website (e.g., cookies to measure web audience) are stored based on Art. 6(1)(f) GDPR unless another legal basis is specified. The website operator has a legitimate interest in storing necessary cookies for the technically error-free and optimized provision of their services. If consent for the storage of cookies and comparable recognition technologies was requested, processing is exclusively based on this consent (Art. 6(1)(a) GDPR and &sect; 25(1) TDDG); the consent can be revoked at any time.</p>
                    <p>You can set your browser so that you are informed about the setting of cookies and allow cookies only in individual cases, exclude the acceptance of cookies for certain cases or generally, and activate the automatic deletion of cookies when closing the browser. If cookies are deactivated, the functionality of this website may be limited.</p>
                    <p>Which cookies and services are used on this website can be found in this privacy policy.</p>

                    <p>Source: <a href="https://www.e-recht24.de" target="_blank" >https://www.e-recht24.de</a></p>
                </div>
            </div>
        `;
  }
});
