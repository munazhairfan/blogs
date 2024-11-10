export default function Blog() {
  return (
    <div>
      <div className="bg-gray-100 min-h-screen p-6">
        <h1 className="text-4xl font-bold text-teal-600 text-center mb-8">Blog</h1>
        <div className="space-y-8">

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-teal-700">Understanding React Components</h2>
            <p className="text-sm text-gray-500 mt-2">March 10, 2024</p>
            <p className="text-lg text-gray-700 mt-4">
              React components are the building blocks of any React application. Components allow you to break down
              the user interface into smaller, reusable pieces of code. Components can either be stateful (managing their own state)
              or stateless (just a UI rendering function). Components can also accept inputs, called props, which allow you to customize their behavior.
            </p>
            <p className="text-lg text-gray-700 mt-4">
              In this post, we&apos;ll explore the basics of React components, how to build functional and class components,
              and how to pass data between them using props. React components make code more modular and easier to manage in large applications.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-teal-700">A Beginner&apos;s Guide to Tailwind CSS</h2>
            <p className="text-sm text-gray-500 mt-2">March 12, 2024</p>
            <p className="text-lg text-gray-700 mt-4">
              Tailwind CSS is a utility-first CSS framework that provides low-level utility classes to build custom designs without writing custom CSS.
              With Tailwind, you can quickly apply styles like padding, margin, colors, and font sizes directly in your HTML files without
              having to create separate CSS files.
            </p>
            <p className="text-lg text-gray-700 mt-4">
              Tailwind allows you to build fully responsive websites by applying utility classes like &apos;sm&semi;&apos;, &apos;md&semi;&apos;, and &apos;lg&semi;&apos; for different screen sizes.
              It&apos;s a fast and efficient way to develop modern websites. You can also extend Tailwind by creating custom classes and themes.
            </p>
          </div>

          {/* Third Blog Post */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-teal-700">How to Start Learning JavaScript</h2>
            <p className="text-sm text-gray-500 mt-2">March 15, 2024</p>
            <p className="text-lg text-gray-700 mt-4">
              JavaScript is the most widely used programming language for building dynamic and interactive websites. If you&apos;re looking to get
              started with JavaScript, the first thing you need to do is set up a basic development environment. Install a text editor
              like VS Code and start playing with basic syntax such as variables, functions, and loops.
            </p>
            <p className="text-lg text-gray-700 mt-4">
              Once you&apos;re familiar with the basics, move on to learning about JavaScript DOM manipulation, events, and APIs. There are plenty
              of tutorials and resources available online to help you master JavaScript. Don&apos;t forget to practice by building small projects
              like a to-do list or a calculator to reinforce your learning.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
