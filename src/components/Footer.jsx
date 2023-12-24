export default function Footer() {
	const year = new Date().getFullYear();
	return (
	  <footer className={`footer flex items-center justify-center p-5 mb-0  dark:bg-gray-800 dark:text-white bg-gray-200 text-gray-700 inset-x-0`}>
		<div>
		  <p>Copyright © {year} - Made by Jatin Kharbanda (for Atlan Assesment)</p>
		</div>
	  </footer>
	);
   }