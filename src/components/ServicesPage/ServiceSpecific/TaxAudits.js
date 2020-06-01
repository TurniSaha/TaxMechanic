import React from 'react'
import "../../../Sass/Service/ServiceSpecific/ServiceSpecific.scss";
import Button from "../../Misc/Button/Button";
import { Link } from "react-router-dom";
export default function TaxRepresentation() {
    return (
        <div>
             <div className="Service">
             <img className="GradientS1Mobile" src="/img/Services/TopImageMobile.jpg" width="100%" alt="Homepage" />
            <img className="GradientS1Comp" src="/img/Services/TopImage.png" width="100%" alt="OurTeam"/>
                <div className="S1TextContainer">
                    <div className="S1Text">
                        <span>Tax Audits.</span>
                        <div className="ButtonContainerS1">
                        <Link to="/contact"><Button className="Button" text="Book a Free Consultation Today"/></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text">
                <span className="Title">
                How CRA select files for their tax audits?

                </span>
                <p className="para">
                     To pick potential tax audit target, CRA typically use the following four methods:<br/><br/>
1. Computer-generated lists<br/><br/>
Most returns are selected for tax audit review from computer-generated lists. For example, the computer system can compare selected financial information of clients engaged in similar business or occupations and generate lists of returns with tax audit potential. From these lists CRA chooses specific returns to be audited.<br/><br/>
2. Tax Audit projects<br/><br/>
In some cases, CRA test the compliance of a particular group of clients. If the tax audit test results indicate that there is significant non compliance within the group, CRA may audit its members on a local, regional, or national basis.<br/><br/>
3. Leads for tax audit<br/><br/>
Leads include information from other tax audits or investigations, as well as information from outside sources.<br/><br/>
4. Secondary files<br/><br/>
Sometimes CRA select files for tax audit because of their association with other previously selected files. For example, if you are in partnership with another client, and that person’s file has been selected for tax audit, it is usually more convenient to examine all the records at the same time.

                </p>
                <span className="Title">
                How are tax audits conducted?

                </span>
                <p className="para">
                If your return is selected for tax audit, an auditor will review your records at a CRA office or called office audit or at your place of business, also known as field audit. The tax audit usually includes an examination of the following documents:
                <br/><br/>
                –  Information on file at the CRA, such as the returns selected for tax audit, financial statements, tax audit reports from any previous tax audits, and any other information on file; and
                <br/><br/>
                – Your business records including your ledgers, journals, bank accounts, sales invoices, purchase vouchers, and expense accounts.
                <br/><br/>
                The auditor will contact you and either request that you send specific records to a CRA office, or arrange a convenient date and time to start the tax audit at your place of business. Throughout the process, the auditor can get information from any relevant people.

                </p>
                
                <span className="Title">
                Office Audits

                </span>
                <p className="para">
                Notice of a Desk Audit will probably arrive by mail and may require that you identify specific items on the return that are in question. You or your professional tax representative may be required to bring certain documents such as bank records to your local tax office for examination. This allows the tax man to check for unreported income. Generally speaking, tax office audits are performed with a Tax Examiner who will request various documents and explanations of deductions.

                </p>
                <span className="Title">
                Field Audits

                </span>
                <p className="para">
                When a tax audit is scheduled at your home or office it should be considered a serious matter. The revenue agents handling these types of tax audits have received a great deal of training beyond the typical Tax Examiner. Naturally, during any type of audit, it can lead to audits of other tax years and other tax deductions.

                </p>
                <span className="Title">
                Why get professional tax audit help?

                </span>
                <p className="para">
                While the auditor’s function is to insure compliance with the law, many government auditors are often pressed for time so they don’t always perform a comprehensive review of all appropriate documents. Plus, it’s often difficult for an auditor to be objective, assuring the taxpayer of his or her rights.<br/><br/>
Very often, auditors request information without explaining how the information will be used, plus they may not explain properly what might happen to those missing information. Because of these issues, errors can occur on the part of the auditor and as a result, an assessment with error along with potential fraud penalties costing the taxpayer significant dollars.<br/><br/>
Our tax audit services include: CRA Income Tax Audit, GST/HST Tax Audit,  Payroll CRA Audit, Tax Audit Representation, WSIB Audit, etc.

                </p>
            </div>
        </div>
    )
}
