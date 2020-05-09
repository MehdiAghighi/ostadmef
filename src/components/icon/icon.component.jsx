import React from "react";

export const Hamburger = (props) => (
   <svg
      {...props}
      className={`icon icon-menu1 text-teal-900 m-1 ${props.className}`}
      style={props.style}
   >
      <symbol id="icon-menu1" viewBox="0 0 24 24">
         <path d="M3 13h18c0.552 0 1-0.448 1-1s-0.448-1-1-1h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1zM3 7h18c0.552 0 1-0.448 1-1s-0.448-1-1-1h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1zM3 19h18c0.552 0 1-0.448 1-1s-0.448-1-1-1h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1z"></path>
      </symbol>
      <use xlinkHref="#icon-menu1"></use>
   </svg>
);

export const ShoppingCart = (props) => (
   <svg
      className={`icon icon-shopping-cart text-teal-900 m-1 ${props.className}`}
      style={props.style}
   >
      <symbol id="icon-shopping-cart" viewBox="0 0 24 24">
         <path d="M11 21c0-0.552-0.225-1.053-0.586-1.414s-0.862-0.586-1.414-0.586-1.053 0.225-1.414 0.586-0.586 0.862-0.586 1.414 0.225 1.053 0.586 1.414 0.862 0.586 1.414 0.586 1.053-0.225 1.414-0.586 0.586-0.862 0.586-1.414zM22 21c0-0.552-0.225-1.053-0.586-1.414s-0.862-0.586-1.414-0.586-1.053 0.225-1.414 0.586-0.586 0.862-0.586 1.414 0.225 1.053 0.586 1.414 0.862 0.586 1.414 0.586 1.053-0.225 1.414-0.586 0.586-0.862 0.586-1.414zM7.221 7h14.57l-1.371 7.191c-0.046 0.228-0.166 0.425-0.332 0.568-0.18 0.156-0.413 0.246-0.688 0.241h-9.734c-0.232 0.003-0.451-0.071-0.626-0.203-0.19-0.143-0.329-0.351-0.379-0.603zM1 2h3.18l0.848 4.239c0.108 0.437 0.502 0.761 0.972 0.761h1.221l-0.4-2h-0.821c-0.552 0-1 0.448-1 1 0 0.053 0.004 0.105 0.012 0.155 0.004 0.028 0.010 0.057 0.017 0.084l1.671 8.347c0.149 0.751 0.57 1.383 1.14 1.811 0.521 0.392 1.17 0.613 1.854 0.603h9.706c0.748 0.015 1.455-0.261 1.995-0.727 0.494-0.426 0.848-1.013 0.985-1.683l1.602-8.402c0.103-0.543-0.252-1.066-0.795-1.17-0.065-0.013-0.13-0.019-0.187-0.018h-16.18l-0.84-4.196c-0.094-0.462-0.497-0.804-0.98-0.804h-4c-0.552 0-1 0.448-1 1s0.448 1 1 1z"></path>
      </symbol>
      <use xlinkHref="#icon-shopping-cart"></use>
   </svg>
);

export const Info = (props) => (
   <svg
      className={`icon icon-info text-teal-900 m-1 ${props.className}`}
      style={props.style}
   >
      <symbol id="icon-info" viewBox="0 0 32 32">
         <path d="M14 9.5c0-0.825 0.675-1.5 1.5-1.5h1c0.825 0 1.5 0.675 1.5 1.5v1c0 0.825-0.675 1.5-1.5 1.5h-1c-0.825 0-1.5-0.675-1.5-1.5v-1z"></path>
         <path d="M20 24h-8v-2h2v-6h-2v-2h6v8h2z"></path>
         <path d="M16 0c-8.837 0-16 7.163-16 16s7.163 16 16 16 16-7.163 16-16-7.163-16-16-16zM16 29c-7.18 0-13-5.82-13-13s5.82-13 13-13 13 5.82 13 13-5.82 13-13 13z"></path>
      </symbol>
      <use xlinkHref="#icon-info"></use>
   </svg>
);

export const Home = (props) => (
   <svg className={`icon icon-home text-teal-900 m-1 ${props.className}`}>
      <symbol id="icon-home-outline" viewBox="0 0 24 24">
         <path d="M22.262 10.468c-3.39-2.854-9.546-8.171-9.607-8.225l-0.655-0.563-0.652 0.563c-0.062 0.053-6.221 5.368-9.66 8.248-0.438 0.394-0.688 0.945-0.688 1.509 0 1.104 0.896 2 2 2h1v6c0 1.104 0.896 2 2 2h12c1.104 0 2-0.896 2-2v-6h1c1.104 0 2-0.896 2-2 0-0.598-0.275-1.161-0.738-1.532zM14 20h-4v-5h4v5zM18 12l0.002 8c-0.002 0-3.002 0-3.002 0v-6h-6v6h-3v-8h-3.001c2.765-2.312 7.315-6.227 9.001-7.68 1.686 1.453 6.234 5.367 9 7.681 0 0-3 0-3-0.001z"></path>
      </symbol>
      <use xlinkHref="#icon-home-outline"></use>
   </svg>
);

export const Mail = (props) => (
   <svg className={`icon icon-mail text-teal-900 m-1 ${props.className}`}>
      <symbol id="icon-mail" viewBox="0 0 32 32">
         <path d="M28 5h-24c-2.209 0-4 1.792-4 4v13c0 2.209 1.791 4 4 4h24c2.209 0 4-1.791 4-4v-13c0-2.208-1.791-4-4-4zM2 10.25l6.999 5.25-6.999 5.25v-10.5zM30 22c0 1.104-0.898 2-2 2h-24c-1.103 0-2-0.896-2-2l7.832-5.875 4.368 3.277c0.533 0.398 1.166 0.6 1.8 0.6 0.633 0 1.266-0.201 1.799-0.6l4.369-3.277 7.832 5.875zM30 20.75l-7-5.25 7-5.25v10.5zM17.199 18.602c-0.349 0.262-0.763 0.4-1.199 0.4s-0.851-0.139-1.2-0.4l-12.8-9.602c0-1.103 0.897-2 2-2h24c1.102 0 2 0.897 2 2l-12.801 9.602z"></path>
      </symbol>
      <use xlinkHref="#icon-mail"></use>
   </svg>
);

export const Close = (props) => (
   <svg
      {...props}
      className={`icon icon-cancel-circle text-teal-900 m-1 ${props.className}`}
   >
      <symbol id="icon-cancel-circle" viewBox="0 0 32 32">
         <path d="M16 0c-8.837 0-16 7.163-16 16s7.163 16 16 16 16-7.163 16-16-7.163-16-16-16zM16 29c-7.18 0-13-5.82-13-13s5.82-13 13-13 13 5.82 13 13-5.82 13-13 13z"></path>
         <path d="M21 8l-5 5-5-5-3 3 5 5-5 5 3 3 5-5 5 5 3-3-5-5 5-5z"></path>
      </symbol>
      <use xlinkHref="#icon-cancel-circle"></use>
   </svg>
);

export const Search = (props) => (
   <svg
      className={`fill-current cursor-pointer text-teal-900 w-4 h-4 ${props.className}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
   >
      <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"></path>
   </svg>
);

export const ArrowLeft = (props) => (
   <svg class={`icon ${props.className}`}>
      <symbol id="icon-arrow-left2" viewBox="0 0 32 32">
         <path d="M12.586 27.414l-10-10c-0.781-0.781-0.781-2.047 0-2.828l10-10c0.781-0.781 2.047-0.781 2.828 0s0.781 2.047 0 2.828l-6.586 6.586h19.172c1.105 0 2 0.895 2 2s-0.895 2-2 2h-19.172l6.586 6.586c0.39 0.39 0.586 0.902 0.586 1.414s-0.195 1.024-0.586 1.414c-0.781 0.781-2.047 0.781-2.828 0z"></path>
      </symbol>
      <use xlinkHref="#icon-arrow-left2"></use>
   </svg>
);

export const SliderBack = (props) => (
   <svg class={`icon ${props.className}`}>
      <symbol id="icon-keyboard_arrow_right" viewBox="0 0 24 24">
         <path d="M8.578 16.594l4.594-4.594-4.594-4.594 1.406-1.406 6 6-6 6z"></path>
      </symbol>
      <use xlinkHref="#icon-keyboard_arrow_right"></use>
   </svg>
);

export const SliderFor = (props) => (
   <svg class={`icon ${props.className}`}>
      <symbol id="icon-keyboard_arrow_left" viewBox="0 0 24 24">
         <path d="M15.422 16.594l-1.406 1.406-6-6 6-6 1.406 1.406-4.594 4.594z"></path>
      </symbol>
      <use xlinkHref="#icon-keyboard_arrow_left"></use>
   </svg>
);

export const Code = (props) => (
   <svg class={`icon ${props.className}`}>
      <symbol id="icon-code" viewBox="0 0 30 28">
         <path d="M9.641 21.859l-0.781 0.781c-0.203 0.203-0.516 0.203-0.719 0l-7.281-7.281c-0.203-0.203-0.203-0.516 0-0.719l7.281-7.281c0.203-0.203 0.516-0.203 0.719 0l0.781 0.781c0.203 0.203 0.203 0.516 0 0.719l-6.141 6.141 6.141 6.141c0.203 0.203 0.203 0.516 0 0.719zM18.875 5.187l-5.828 20.172c-0.078 0.266-0.359 0.422-0.609 0.344l-0.969-0.266c-0.266-0.078-0.422-0.359-0.344-0.625l5.828-20.172c0.078-0.266 0.359-0.422 0.609-0.344l0.969 0.266c0.266 0.078 0.422 0.359 0.344 0.625zM29.141 15.359l-7.281 7.281c-0.203 0.203-0.516 0.203-0.719 0l-0.781-0.781c-0.203-0.203-0.203-0.516 0-0.719l6.141-6.141-6.141-6.141c-0.203-0.203-0.203-0.516 0-0.719l0.781-0.781c0.203-0.203 0.516-0.203 0.719 0l7.281 7.281c0.203 0.203 0.203 0.516 0 0.719z"></path>
      </symbol>
      <use xlinkHref="#icon-code"></use>
   </svg>
);

export const Cross = (props) => (
   <svg {...props} class={`icon icon-close ${props.className}`}>
      <symbol id="icon-close" viewBox="0 0 20 20">
         <path d="M10 8.586l-7.071-7.071-1.414 1.414 7.071 7.071-7.071 7.071 1.414 1.414 7.071-7.071 7.071 7.071 1.414-1.414-7.071-7.071 7.071-7.071-1.414-1.414-7.071 7.071z"></path>
      </symbol>
      <use xlinkHref="#icon-close"></use>
   </svg>
);
