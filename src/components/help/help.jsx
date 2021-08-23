import React from "react";

function Help() {
  return (
    <div className="help_container">
      <h1 className="heading">How Can You Help</h1>
      <div className="help_quote">
        <h3>
          “How wonderful it is that nobody needs to wait a single moment before
          starting to improve the world.”
        </h3>
        <h3 style={{ textAlign: "right" }}>- Anne Frank</h3>
      </div>
      <ul>
        <li>
          <span>Donate:</span> There is no cause greater than that of helping
          those that are disadvantaged by the socio-economic equalities of the
          society we are living in. You can directly help support this cause by
          donating to genuine organisations working for the betterment of the
          underprivileged sector. Every donation, no matter how small or big, is
          a stepping stone for the country’s better future.
        </li>
        <li>
          <span>Volunteer with us:</span> If you are passionate towards helping
          the deprived and have an ardour to bring about a change through the
          medium of education, then your ideals closely align with ours. We are
          a smaller team at the moment and are open to volunteers from all areas
          of education. If you wish to join us please reach us at{" "}
          <a href="mailto:prayatan.ekawaaz@gmail.com">
            prayatan.ekawaaz@gmail.com
          </a>
          .
        </li>
        <li>
          <span>
            Take responsibility of the education of one child in your lifetime:
          </span>{" "}
          If we all aim to educate at least one child in the journey of our
          entire lifetime, imagine the kind of change we are capable of bringing
          on a larger level. Today, make a promise to be a bearer of change and
          take the responsibility of ensuring the complete education of one
          underprivileged child in your vicinity.
        </li>
        <li>
          <span>
            Research, recognize and recommend solutions for a brighter future of
            the deprived section:{" "}
          </span>{" "}
          It is essential that we understand the ingrained fosters of inequality
          that have led to inadequate access of resources to the underprivileged
          section of the society. You can also help by conducting empirical
          research on the causes of this inequality and recommending a
          multi-stakeholder solution for a brighter tomorrow.
        </li>
      </ul>
    </div>
  );
}

export default Help;
