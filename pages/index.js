import Head from 'next/head'

const images = [
	{name: 'Social App Concept', imgUrl: 'app-social.png', rgb: '81, 14, 237', url: 'https://www.behance.net/gallery/101281451/Social-Video-App'},
	{name: 'Ransom', imgUrl: 'ransom.png', rgb: '67, 49, 193', url: 'https://www.behance.net/gallery/101281165/Ransom'}, 
	{name: 'Stripe', imgUrl: 'stripe.jpg', rgb: '0, 21, 255', url: 'https://drive.google.com/drive/folders/13t-bCfUTfI4GHQALP_hZYOXd9anz4KpA?usp=sharing'}, 
	{name: 'Despegar', imgUrl: 'despegar.jpg', rgb: '81, 14, 237', url: 'https://drive.google.com/drive/folders/1mwNRtTMolkL5sbfat4P5pgQhuCnHBd7M?usp=sharing'}, 
	{name: 'TeeRead', imgUrl: 'teeRead.png', rgb: '33, 150, 243', url: 'https://www.behance.net/gallery/101281325/TeeRead'},
	{name: 'Glow', imgUrl: 'glow.png', rgb: '229, 197, 204', url: 'https://www.behance.net/gallery/101281057/Glow'}, 
] 

const Home = () => (
  <div className="container">
    <Head>
      <title>Isa Bensusan | Portfolio</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
			<div className="title-wrapper">
				<h1 className="title">
					Isa Bensusan
				</h1>
				<p className="subtitle">Product Portfolio 2020</p>
			</div>

      <div className="grid">
				{
					images.map((image) => 
						// <a href="#" className="card" style={{background: `linear-gradient(to top, #e6646500, #7681fd52), no-repeat center/100% url('/covers/${image.imgUrl}')`  }}>
						<a href={`${image.url}`} className="card" style={{backgroundImage: `url('/covers/${image.imgUrl}')`  }}>	
							<div className="overlay" style={{background: `linear-gradient(to top,rgba(${image.rgb}, 0.35) 10%, rgba(${image.rgb}, 0.15) 50%,rgba(230, 100, 101, 0) 90%)`  }}></div>
							<h3>{image.name}</h3>
							{/* <p>Find in-depth information about Next.js features and API.</p> */}
						</a>
					)
				}

{/* 
        <a href="https://nextjs.org/docs" className="card">
          <h3>Documentation &rarr;</h3>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        <a href="https://nextjs.org/learn" className="card">
          <h3>Learn &rarr;</h3>
          <p>Learn about Next.js in an interactive course with quizzes!</p>
        </a>

        <a
          href="https://github.com/zeit/next.js/tree/master/examples"
          className="card"
        >
          <h3>Examples &rarr;</h3>
          <p>Discover and deploy boilerplate example Next.js projects.</p>
        </a>

        <a
          href="https://vercel.com/new?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          className="card"
        >
          <h3>Deploy &rarr;</h3>
          <p>
            Instantly deploy your Next.js site to a public URL with Vercel.
          </p>
        </a> */}
      </div>
    </main>

		<style jsx>{`

      .container {
        min-height: 100vh;
        padding: 0 0.5rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      main {
				width: 100%;
        padding: 5rem 0;
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
				align-items: center;
				max-width: 1500px;
			}

      footer {
        width: 100%;
        height: 100px;
        border-top: 1px solid #eaeaea;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      footer img {
        margin-left: 0.5rem;
      }

      footer a {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      a {
        color: inherit;
        text-decoration: none;
      }

      .title a {
        color: #0070f3;
        text-decoration: none;
      }

      .title a:hover,
      .title a:focus,
      .title a:active {
        text-decoration: underline;
      }

      .title {
        margin: 0;
        line-height: 1.15;
				font-size: 4rem;
				display: block;
				width: 100%;
				text-align: left;
				font-size: 2.5rem;
      }

			.title-wrapper {
				width: 100%;
				padding-left: 3rem;
			}

      .description {
        line-height: 1.5;
        font-size: 1.5rem;
      }

      code {
        background: #fafafa;
        border-radius: 5px;
        padding: 0.75rem;
        font-size: 1.1rem;
        font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
          DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
      }

      .grid {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
				width: 100%;
        // max-width: 800px;
      }

      .card {
        margin: 4rem 2rem;
        flex-basis: 45%;
        padding: 1.5rem;
        text-align: left;
        color: inherit;
        text-decoration: none;
        // border: 1px solid #eaeaea;
        border-radius: 10px;
				transition: color 0.15s ease, border-color 0.15s ease;
				display: flex;
				min-height: 25rem;
				align-items: flex-end;
				background-position: center center;
				transition: background-size 290ms ease-in-out;
				background-size: 100%;
				position: relative;
      }

      .card:hover,
      .card:focus,
      .card:active {
        // color: #0070f3;
				// border-color: #0070f3;
				background-size: 105%;
				transition: background-size 290ms ease-in-out, background 290ms ease-in-out;
      }

      .card h3 {
				margin: 0;
				font-size: 1.5rem;
				position: absolute;
				
				bottom: -3.2rem;
    		font-weight: 400;
      }

      .card p {
        margin: 0;
        font-size: 1.25rem;
        line-height: 1.5;
			}
			
			.overlay {
				position: absolute;
				width: 100%;
				height: 100%;
				background-color: blue;
				display: block;
				top: 0;
				left: 0;
				background: linear-gradient(#e6646500, #7681fd52);
				border-radius: 10px;
			}

      @media (max-width: 600px) {
        .grid {
          width: 100%;
          flex-direction: column;
				}
				
				.card { 
					width: 90%
				}
      }
    `}</style>

		<style jsx global>{`
			@import url('https://fonts.googleapis.com/css2?family=Karla:wght@400;700&display=swap');
			
      html,
      body {
        padding: 0;
        margin: 0;
        font-family:'Karla', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
			}

      * {
        box-sizing: border-box;
      }
    `}</style>
  </div>
)

export default Home
