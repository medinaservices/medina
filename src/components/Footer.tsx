import Logo from './Logo';
import SectionLink from './SectionLink';
import { company, nav } from '@/lib/content';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container container-wide">
        <div className="footer__top">
          <div className="footer__col">
            <Logo variant="white" />
            <p className="footer__cred">{company.license}</p>
            <p className="footer__cred">{company.sam}</p>
          </div>

          <div className="footer__col">
            <h4>Explore</h4>
            {nav.links.map((l) => (
              <SectionLink key={l.label} href={l.href}>
                {l.label}
              </SectionLink>
            ))}
          </div>

          <div className="footer__col">
            <h4>Contact</h4>
            <a href={company.phoneHref}>{company.phone}</a>
            <a href={company.emailHref}>{company.email}</a>
            <p>{company.address}</p>
            <p>Serving {company.serviceArea}</p>
          </div>
        </div>

        <div className="footer__bottom">
          <span>
            © {new Date().getFullYear()} {company.name}. All rights reserved.
          </span>
          <span>Minority-Owned Small Business · Serving Northern Virginia since {company.since}</span>
        </div>
      </div>
    </footer>
  );
}
