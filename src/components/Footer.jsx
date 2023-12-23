export default function Footer() {
	const year = new Date().getFullYear();
	return (
	  <footer className={`footer flex items-center justify-center p-4 dark:bg-gray-800 dark:text-white bg-gray-200 text-gray-700 inset-x-0 mb-0`}>
		<div>
		  <p>Copyright © {year} - Made by Jatin Kharbanda ❤️</p>
		</div>
	  </footer>
	);
   }