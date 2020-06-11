import React from "react";
import { Link } from "gatsby";
import { css } from "@emotion/core";
import { sizes } from "../../assets/css/variables/sizes";
import { AreaPageTheme, PoleProps } from "../../pages/areas/talk";

export type CoverPoleProps = {
  pageTheme: AreaPageTheme;
} & PoleProps;

export const CoverPole = ({ imageSource, to, index, description, pageTheme }: CoverPoleProps & { index: number }) => {
  const coverPoleSectionStyle = (poleIndex: number): React.CSSProperties => ({
    display: "flex",
    flexDirection: "row",
    height: `calc((100vh - ${sizes.headerHeight}) / 3)`,
    // textAlign: "end",
    backgroundColor: poleIndex % 2 === 0 ? pageTheme.secondaryColorLighter : pageTheme.secondaryColorLightest,
  });

  const coverPoleStyle = css`
    max-width: 505px;
    width: auto;
    img {
      height: 100%;
    }
  `;

  const descriptionPoleStyle = css`
    padding: 2em;
    display: flex;
    flex-direction: column;
    justify-content: center;
  `;

  const learnMoreButtonStyle = css`
    text-align: end;
    a {
      color: ${pageTheme.mainColorLight};
      transition: background-color 0.1s ease-in-out;
      padding: 0.75em 1.75em;
      border-radius: 100px;
      height: 40px !important;
      box-shadow: 0 0 0.05em 0.1em ${pageTheme.mainColorLight};

      &:hover {
        background-color: ${pageTheme.secondaryColor};
      }
    }
  `;
  return (
    <div style={coverPoleSectionStyle(index)}>
      <div css={descriptionPoleStyle}>
        <p>{description}</p>
        <div css={learnMoreButtonStyle}>
          <Link to={to}>En savoir plus</Link>
        </div>
      </div>
      <div css={coverPoleStyle}>
        <Link to={to}>
          <img src={imageSource} alt="" />
        </Link>
      </div>
    </div>
  );
};