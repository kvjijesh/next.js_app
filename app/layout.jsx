import '@styles/globals.css';


export const metadata = {
  title:"PromptHere",
  description:"Discover and share AI prompts here",
}
function RootLayout({children}) {
  return (
    <html lang='en'>
      <body>
        <div className='main'>
          <div className='gradient'/>
        </div>
        <main className='app'>
          {children}
        </main>
      </body>
    </html>
  )
}

export default RootLayout