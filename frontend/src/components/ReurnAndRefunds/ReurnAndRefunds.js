import React from 'react'
import { createStyles, makeStyles } from '@mui/styles';

const useStyles = makeStyles(() =>
    createStyles({
        container: {
            maxWidth: '1170px',
            margin: 'auto'
        },
        hadding: {
            paddingTop: '4rem'
        },
        anchorLink: {
            textDecoration: 'underline',
            color: '#553df4'
        }
    })
)
export default function ReurnAndRefunds() {
    const classes = useStyles();
    return (
        <div>
            <section className={classes.container}>
                <div className={classes.hadding}>

                    <h1>Return and Refund Policy</h1>
                    <p>Last updated: August 27, 2022</p>
                    <p>Thank you for shopping at BellaPartyBus.</p>
                    <p>If, for any reason, You are not completely satisfied with a purchase We invite You to review our policy on refunds and returns.</p>
                    <p>The following terms are applicable for any products that You purchased with Us.</p>
                    <h1>Interpretation and Definitions</h1>
                    <h2>Interpretation</h2>
                    <p>The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</p>
                    <h2>Definitions</h2>
                    <p>For the purposes of this Return and Refund Policy:</p>
                    <ul>
                        <li>
                            <p><strong>Company</strong> (referred to as either &quot;the Company&quot;, &quot;We&quot;, &quot;Us&quot; or &quot;Our&quot; in this Agreement) refers to Bella PARTY BUS ENTERTAINMENT LLC, 10 Kearny Ave Kearny NJ 07032.</p>
                        </li>
                        <li>
                            <p><strong>Goods</strong> refer to the items offered for sale on the Service.</p>
                        </li>
                        <li>
                            <p><strong>Orders</strong> mean a request by You to purchase Goods from Us.</p>
                        </li>
                        <li>
                            <p><strong>Service</strong> refers to the Website.</p>
                        </li>
                        <li>
                            <p><strong>Website</strong> refers to BellaPartyBus, accessible from <a href="https://www.bellapartybus.com/" className={classes.anchorLink} rel="external nofollow noopener" target="_blank">https://www.bellapartybus.com/</a></p>
                        </li>
                        <li>
                            <p><strong>You</strong> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</p>
                        </li>
                    </ul>
                    <h1>Your Order Cancellation Rights</h1>
                    <p>You are entitled to cancel Your Order within 30 days without giving any reason for doing so.</p>
                    <p>The deadline for cancelling an Order is 30 days from the date on which You received the Goods or on which a third party you have appointed, who is not the carrier, takes possession of the product delivered.</p>
                    <p>In order to exercise Your right of cancellation, You must inform Us of your decision by means of a clear statement. You can inform us of your decision by:</p>
                    <ul>
                        <li>
                            <p>By email: jmartins@bellapartybus.com</p>
                        </li>
                        <li>
                            <p>By visiting this page on our website: <a href="https://www.bellapartybus.com/" className={classes.anchorLink} rel="external nofollow noopener" target="_blank">https://www.bellapartybus.com/</a></p>
                        </li>
                        <li>
                            <p>By mail: 10 Kearny ave Kearny, NJ 07095, United States</p>
                        </li>
                    </ul>
                    <p>We will reimburse You no later than 14 days from the day on which We receive the returned Goods. We will use the same means of payment as You used for the Order, and You will not incur any fees for such reimbursement.</p>
                    <h1>Conditions for Returns</h1>
                    <p>In order for the Goods to be eligible for a return, please make sure that:</p>
                    <ul>
                        <li>
                            <p>The Goods were purchased in the last 30 days</p>
                        </li>
                        <li>
                            <p>You have the receipt or proof of purchase</p>
                        </li>
                    </ul>
                    <p>The following Goods cannot be returned:</p>
                    <ul>
                        <li>The supply of Goods made to Your specifications or clearly personalized.</li>
                        <li>The supply of Goods which according to their nature are not suitable to be returned, deteriorate rapidly or where the date of expiry is over.</li>
                        <li>The supply of Goods which are not suitable for return due to health protection or hygiene reasons and were unsealed after delivery.</li>
                        <li>The supply of Goods which are, after delivery, according to their nature, inseparably mixed with other items.</li>
                    </ul>
                    <p>We reserve the right to refuse returns of any merchandise that does not meet the above return conditions in our sole discretion.</p>
                    <p>Only regular priced Goods may be refunded. Unfortunately, Goods on sale cannot be refunded. This exclusion may not apply to You if it is not permitted by applicable law.</p>
                    <h1>Returning Goods</h1>
                    <p>You are responsible for the cost and risk of returning the Goods to Us. You should send the Goods at the following address:</p>
                    <p>Customer will need to contact us by phone or email.</p>
                    <p>We cannot be held responsible for Goods damaged or lost in return shipment. Therefore, We recommend an insured and trackable mail service. We are unable to issue a refund without actual receipt of the Goods or proof of received return delivery.</p>
                    <h1>Gifts</h1>
                    <p>If the Goods were marked as a gift when purchased and then shipped directly to you, You'll receive a gift credit for the value of your return. Once the returned product is received, a gift certificate will be mailed to You.</p>
                    <p>If the Goods weren't marked as a gift when purchased, or the gift giver had the Order shipped to themselves to give it to You later, We will send the refund to the gift giver.</p>
                    <h2>Contact Us</h2>
                    <p>If you have any questions about our Returns and Refunds Policy, please contact us:</p>
                    <ul>
                        <li>
                            <p>By email: jmartins@bellapartybus.com</p>
                        </li>
                        <li>
                            <p>By visiting this page on our website: <a href="https://www.bellapartybus.com/" className={classes.anchorLink} rel="external nofollow noopener" target="_blank">https://www.bellapartybus.com/</a></p>
                        </li>
                        <li>
                            <p>By mail: 10 Kearny ave Kearny, NJ 07095, United States</p>
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    )
}
