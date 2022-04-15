import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';

export const Navbar = () => {
        return (
    <nav class="navbar navbar-expand-lg" aria-label="Twelfth navbar example">
      <div class="container-fluid">
        <button class="navbar-toggler navbar-light bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample10" aria-controls="navbarsExample10" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse justify-content-md-center" id="navbarsExample10">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="#">PUBGAME&emsp;&emsp;</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">&emsp;&emsp;&emsp;&emsp;CONTACT&emsp;&emsp;</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">&emsp;&emsp;&emsp;&emsp;TEAM&emsp;&emsp;</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">&emsp;&emsp;&emsp;&emsp;TOKENOMICS&emsp;&emsp;</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">&emsp;&emsp;&emsp;&emsp;WHITE PAPER</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
        );
    }