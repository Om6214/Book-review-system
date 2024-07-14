import React from 'react'
import { useAuth } from '../storage/auth'
import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/react";
import "./Loading.css"

const override = css`
  display: flex;
  justify-content: center;
  align-items: center;
  border-color: red;
  height: 100vh; /* Full viewport height */
  width: 100vw; /* Full viewport width */
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(255, 255, 255, 0.8); /* Optional: Add background overlay */
  z-index: 9999;
`;

const Loading = () => {
    const { loading } = useAuth();
    return (
        loading && (
            <div className='loadingbar' css={override}>
                <ClipLoader
                    size={75}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                />
            </div>
        )
    );
}

export default Loading;
