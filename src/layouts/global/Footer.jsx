import React from 'react'

const Footer = () => {
    return (
        <footer className='Footer'>
            <div className="Footer-top">
                {/* Brand / Logo */}
                <div className="Footer-brand">
                    <h2 className="Footer-logo">AccessCommerce</h2>
                    <p className="Footer-description">
                        Your accessible marketplace for premium audio and accessories.
                    </p>
                </div>

                {/* Company Links */}
                <div className="Footer-company">
                    <ul>
                        <li><a href="/company">Company</a></li>
                        <li><a href="/about">About us</a></li>
                        <li><a href="/careers">Careers</a></li>
                        <li><a href="/press">Press</a></li>
                    </ul>
                </div>

                {/* Support Links */}
                <div className="Footer-support">
                    <ul>
                        <li><a href="/support">Support</a></li>
                        <li><a href="/contact">Contact</a></li>
                        <li><a href="/accessibility">Accessibility</a></li>
                        <li><a href="/shipping">Shipping & Returns</a></li>
                    </ul>
                </div>
            </div>

        </footer>
    )
}

export default Footer