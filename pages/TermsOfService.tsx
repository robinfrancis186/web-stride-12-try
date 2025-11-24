import React from 'react';
import { motion } from 'framer-motion';

export const TermsOfService: React.FC = () => {
    return (
        <div className="pt-32 pb-20 min-h-screen bg-slate-50 text-slate-900">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-5xl md:text-6xl font-black text-slate-900 mb-6">
                        Terms of <span className="gradient-text">Service</span>
                    </h1>
                    <p className="text-slate-600 mb-8">Last Updated: November 24, 2025</p>

                    <div className="prose prose-slate max-w-none">
                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Acceptance of Terms</h2>
                            <p className="text-slate-700 leading-relaxed mb-4">
                                By accessing and using the STRIDE Community platform ("Service"), you accept and agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use our Service.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Description of Service</h2>
                            <p className="text-slate-700 leading-relaxed mb-4">
                                STRIDE Community is a platform that connects innovation centers, manufacturing studios, and community members to develop and distribute affordable assistive technology. Our Service includes:
                            </p>
                            <ul className="list-disc list-inside text-slate-700 mb-4 space-y-2">
                                <li>Access to innovation resources and knowledge base</li>
                                <li>Community networking and collaboration tools</li>
                                <li>Project management and tracking features</li>
                                <li>Event registration and participation</li>
                                <li>Product catalog and ordering system</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. User Accounts</h2>

                            <h3 className="text-xl font-semibold text-slate-800 mb-3">3.1 Registration</h3>
                            <p className="text-slate-700 leading-relaxed mb-4">
                                To access certain features, you must create an account. You agree to:
                            </p>
                            <ul className="list-disc list-inside text-slate-700 mb-4 space-y-2">
                                <li>Provide accurate, current, and complete information</li>
                                <li>Maintain and update your information</li>
                                <li>Keep your password secure and confidential</li>
                                <li>Notify us immediately of any unauthorized use</li>
                            </ul>

                            <h3 className="text-xl font-semibold text-slate-800 mb-3">3.2 Account Responsibility</h3>
                            <p className="text-slate-700 leading-relaxed mb-4">
                                You are responsible for all activities that occur under your account. You must be at least 13 years old to create an account.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. User Conduct</h2>
                            <p className="text-slate-700 leading-relaxed mb-4">
                                You agree not to:
                            </p>
                            <ul className="list-disc list-inside text-slate-700 mb-4 space-y-2">
                                <li>Violate any applicable laws or regulations</li>
                                <li>Infringe on intellectual property rights</li>
                                <li>Upload malicious code or viruses</li>
                                <li>Harass, abuse, or harm other users</li>
                                <li>Impersonate others or provide false information</li>
                                <li>Attempt to gain unauthorized access to the Service</li>
                                <li>Use the Service for commercial purposes without permission</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Intellectual Property</h2>

                            <h3 className="text-xl font-semibold text-slate-800 mb-3">5.1 Our Content</h3>
                            <p className="text-slate-700 leading-relaxed mb-4">
                                All content on the Service, including text, graphics, logos, and software, is owned by STRIDE Community or its licensors and protected by intellectual property laws.
                            </p>

                            <h3 className="text-xl font-semibold text-slate-800 mb-3">5.2 User Content</h3>
                            <p className="text-slate-700 leading-relaxed mb-4">
                                You retain ownership of content you submit. By posting content, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, and distribute your content in connection with the Service.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Products and Services</h2>
                            <p className="text-slate-700 leading-relaxed mb-4">
                                Product descriptions, pricing, and availability are subject to change without notice. We reserve the right to:
                            </p>
                            <ul className="list-disc list-inside text-slate-700 mb-4 space-y-2">
                                <li>Limit quantities of products</li>
                                <li>Refuse or cancel orders</li>
                                <li>Modify or discontinue products</li>
                                <li>Correct pricing errors</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Privacy</h2>
                            <p className="text-slate-700 leading-relaxed mb-4">
                                Your use of the Service is also governed by our Privacy Policy. Please review our Privacy Policy to understand our practices.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Disclaimers</h2>
                            <p className="text-slate-700 leading-relaxed mb-4">
                                THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. WE DO NOT WARRANT THAT:
                            </p>
                            <ul className="list-disc list-inside text-slate-700 mb-4 space-y-2">
                                <li>The Service will be uninterrupted or error-free</li>
                                <li>Defects will be corrected</li>
                                <li>The Service is free of viruses or harmful components</li>
                                <li>Results from using the Service will be accurate or reliable</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">9. Limitation of Liability</h2>
                            <p className="text-slate-700 leading-relaxed mb-4">
                                TO THE MAXIMUM EXTENT PERMITTED BY LAW, STRIDE COMMUNITY SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">10. Termination</h2>
                            <p className="text-slate-700 leading-relaxed mb-4">
                                We may terminate or suspend your account and access to the Service at our sole discretion, without prior notice, for conduct that we believe violates these Terms or is harmful to other users, us, or third parties.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">11. Changes to Terms</h2>
                            <p className="text-slate-700 leading-relaxed mb-4">
                                We reserve the right to modify these Terms at any time. We will notify users of any material changes. Your continued use of the Service after changes constitutes acceptance of the new Terms.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">12. Governing Law</h2>
                            <p className="text-slate-700 leading-relaxed mb-4">
                                These Terms shall be governed by and construed in accordance with applicable laws, without regard to conflict of law principles.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">13. Contact Information</h2>
                            <p className="text-slate-700 leading-relaxed mb-4">
                                If you have any questions about these Terms, please contact us at:
                            </p>
                            <div className="bg-slate-100 p-6 rounded-lg">
                                <p className="text-slate-700"><strong>Email:</strong> legal@stridecommunity.org</p>
                                <p className="text-slate-700"><strong>Address:</strong> STRIDE Community, Innovation Hub</p>
                            </div>
                        </section>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};
