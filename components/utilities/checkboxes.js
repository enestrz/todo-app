import React from 'react'

export default function checkboxes() {
  return (
    <div>checkboxes</div>
  )
}


// 1. Checkbox
{/* <div class="checkbox-wrapper-15">
  <input class="inp-cbx" id="cbx-15" type="checkbox" style="display: none;"/>
  <label class="cbx" for="cbx-15">
    <span>
      <svg width="12px" height="9px" viewbox="0 0 12 9">
        <polyline points="1 5 4 8 11 1"></polyline>
      </svg>
    </span>
    <span>To-do</span>
  </label>
</div>

<style>
  .checkbox-wrapper-15 .cbx {
    -webkit-user-select: none;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
    cursor: pointer;
  }
  .checkbox-wrapper-15 .cbx span {
    display: inline-block;
    vertical-align: middle;
    transform: translate3d(0, 0, 0);
  }
  .checkbox-wrapper-15 .cbx span:first-child {
    position: relative;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    transform: scale(1);
    vertical-align: middle;
    border: 1px solid #B9B8C3;
    transition: all 0.2s ease;
  }
  .checkbox-wrapper-15 .cbx span:first-child svg {
    position: absolute;
    z-index: 1;
    top: 8px;
    left: 6px;
    fill: none;
    stroke: white;
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-dasharray: 16px;
    stroke-dashoffset: 16px;
    transition: all 0.3s ease;
    transition-delay: 0.1s;
    transform: translate3d(0, 0, 0);
  }
  .checkbox-wrapper-15 .cbx span:first-child:before {
    content: "";
    width: 100%;
    height: 100%;
    background: #506EEC;
    display: block;
    transform: scale(0);
    opacity: 1;
    border-radius: 50%;
    transition-delay: 0.2s;
  }
  .checkbox-wrapper-15 .cbx span:last-child {
    margin-left: 8px;
  }
  .checkbox-wrapper-15 .cbx span:last-child:after {
    content: "";
    position: absolute;
    top: 8px;
    left: 0;
    height: 1px;
    width: 100%;
    background: #B9B8C3;
    transform-origin: 0 0;
    transform: scaleX(0);
  }
  .checkbox-wrapper-15 .cbx:hover span:first-child {
    border-color: #3c53c7;
  }

  .checkbox-wrapper-15 .inp-cbx:checked + .cbx span:first-child {
    border-color: #3c53c7;
    background: #3c53c7;
    animation: check-15 0.6s ease;
  }
  .checkbox-wrapper-15 .inp-cbx:checked + .cbx span:first-child svg {
    stroke-dashoffset: 0;
  }
  .checkbox-wrapper-15 .inp-cbx:checked + .cbx span:first-child:before {
    transform: scale(2.2);
    opacity: 0;
    transition: all 0.6s ease;
  }
  .checkbox-wrapper-15 .inp-cbx:checked + .cbx span:last-child {
    color: #B9B8C3;
    transition: all 0.3s ease;
  }
  .checkbox-wrapper-15 .inp-cbx:checked + .cbx span:last-child:after {
    transform: scaleX(1);
    transition: all 0.3s ease;
  }

  @keyframes check-15 {
    50% {
      transform: scale(1.2);
    }
  }
</style> */}


// 2. Checkbox
{/* <div class="checkbox-wrapper-23">
  <input type="checkbox" id="check-23"/>
  <label for="check-23" style="--size: 30px">
    <svg viewBox="0,0,50,50">
      <path d="M5 30 L 20 45 L 45 5"></path>
    </svg>
  </label>
</div>

<style>
  .checkbox-wrapper-23 *,
  .checkbox-wrapper-23 *:after,
  .checkbox-wrapper-23 *:before {
    box-sizing: border-box;
  }

  .checkbox-wrapper-23 input {
    position: absolute;
    opacity: 0;
  }
    
  .checkbox-wrapper-23 input:checked + label svg path {
    stroke-dashoffset: 0;
  }
    
  .checkbox-wrapper-23 input:focus + label {
    transform: scale(1.03);
  }

  .checkbox-wrapper-23 input + label {
    display: block;
    border: 2px solid #333;
    width: var(--size);
    height: var(--size);
    border-radius: 6px;
    cursor: pointer;
    transition: all .2s ease;
  }
    
  .checkbox-wrapper-23 input + label:active {
    transform: scale(1.05);
    border-radius: 12px;
  }
    
  .checkbox-wrapper-23 input + label svg {
    pointer-events: none;
    padding: 5%;
  }

  .checkbox-wrapper-23 input + label svg path {      
    fill: none;     
    stroke: #333;
    stroke-width: 4px;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-dasharray: 100;
    stroke-dashoffset: 101;
    transition: all 250ms cubic-bezier(1,0,.37,.91);
  }
</style> */}
