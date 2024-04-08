function MyButton({text, bg, styleBorder}) {
   console.log(text, bg,); 
   return (
     <div>
         <button style={{backgroundColor: bg || 'black', border: styleBorder}}>
         {text}
      </button>
     </div>
   );
}
export default MyButton