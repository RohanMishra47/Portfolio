

const Footer: React.FC = () => {
    return(
        <footer className="footer">
            <p>&copy; {new Date().getFullYear()} CrazyPortfolio. All rights reserved.</p>
            <div className="socialLinks">
                <a href="https://github.com/RohanMishra-47" target="_blank" rel="noopener noreferrer">
                    GitHub
                </a>
            </div>
        </footer>
    );
};

export default Footer;