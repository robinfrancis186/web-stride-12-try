import React from 'react';
import { motion } from 'framer-motion';

export const PrivacyPolicy: React.FC = () => {
    return (
        <div className="pt-32 pb-20 min-h-screen bg-slate-50 text-slate-900">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-5xl md:text-6xl font-black text-slate-900 mb-6">
                        Privacy <span className="gradient-text">Policy</span>
                    </h1>
                    <p className="text-slate-600 mb-8">Last Updated: November 24, 2025</p>

                    <div className="prose prose-slate max-w-none">
                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Introduction</h2>
                            <p className="text-slate-700 leading-relaxed mb-4">
                                Welcome to STRIDE Community ("we," "our," or "us"). We are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Information We Collect</h2>

                            <h3 className="text-xl font-semibold text-slate-800 mb-3">2.1 Personal Information</h3>
                            <p className="text-slate-700 leading-relaxed mb-4">
                                We may collect personal information that you provide directly to us, including:
                            </p>
                            <ul className="list-disc list-inside text-slate-700 mb-4 space-y-2">
                                <li>Name, email address, and contact information</li>
                                <li>Account credentials (username and password)</li>
                                <li>Profile information (institution, role, interests)</li>
                                <li>Communication preferences</li>
                            </ul>

                            <h3 className="text-xl font-semibold text-slate-800 mb-3">2.2 Usage Information</h3>
                            <p className="text-slate-700 leading-relaxed mb-4">
                                We automatically collect certain information about your device and how you interact with our platform:
                            </p>
                            <ul className="list-disc list-inside text-slate-700 mb-4 space-y-2">
                                <li>Device information (browser type, operating system)</li>
                                <li>IP address and location data</li>
                                <li>Usage patterns and preferences</li>
                                <li>Cookies and similar tracking technologies</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. How We Use Your Information</h2>
                            <p className="text-slate-700 leading-relaxed mb-4">
                                We use the collected information for the following purposes:
                            </p>
                            <ul className="list-disc list-inside text-slate-700 mb-4 space-y-2">
                                <li>To provide, maintain, and improve our services</li>
                                <li>To personalize your experience on our platform</li>
                                <li>To communicate with you about updates, events, and opportunities</li>
                                <li>To facilitate connections between members of the STRIDE community</li>
                                <li>To analyze usage patterns and improve our platform</li>
                                <li>To comply with legal obligations and protect our rights</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Information Sharing</h2>
                            <p className="text-slate-700 leading-relaxed mb-4">
                                We do not sell your personal information. We may share your information in the following circumstances:
                            </p>
                            <ul className="list-disc list-inside text-slate-700 mb-4 space-y-2">
                                <li><strong>With your consent:</strong> When you explicitly agree to share information</li>
                                <li><strong>Service providers:</strong> With trusted third-party service providers who assist in operating our platform</li>
                                <li><strong>Legal requirements:</strong> When required by law or to protect our rights</li>
                                <li><strong>Community members:</strong> Profile information may be visible to other verified community members</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Data Security</h2>
                            <p className="text-slate-700 leading-relaxed mb-4">
                                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Your Rights</h2>
                            <p className="text-slate-700 leading-relaxed mb-4">
                                You have the following rights regarding your personal information:
                            </p>
                            <ul className="list-disc list-inside text-slate-700 mb-4 space-y-2">
                                <li><strong>Access:</strong> Request access to your personal data</li>
                                <li><strong>Correction:</strong> Request correction of inaccurate data</li>
                                <li><strong>Deletion:</strong> Request deletion of your data</li>
                                <li><strong>Opt-out:</strong> Unsubscribe from marketing communications</li>
                                <li><strong>Data portability:</strong> Request a copy of your data</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Cookies</h2>
                            <p className="text-slate-700 leading-relaxed mb-4">
                                We use cookies and similar technologies to enhance your experience, analyze usage, and personalize content. You can control cookies through your browser settings.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Children's Privacy</h2>
                            <p className="text-slate-700 leading-relaxed mb-4">
                                Our platform is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">9. Changes to This Policy</h2>
                            <p className="text-slate-700 leading-relaxed mb-4">
                                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">10. Contact Us</h2>
                            <p className="text-slate-700 leading-relaxed mb-4">
                                If you have any questions about this Privacy Policy, please contact us at:
                            </p>
                            <div className="bg-slate-100 p-6 rounded-lg">
                                <p className="text-slate-700"><strong>Email:</strong> privacy@stridecommunity.org</p>
                                <p className="text-slate-700"><strong>Address:</strong> STRIDE Community, Innovation Hub</p>
                            </div>
                        </section>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};
