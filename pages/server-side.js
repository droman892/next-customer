import { gql } from "@apollo/client";
import client from "../apollo-client";

export async function getServerSideProps() {
    const { data } = await client.query({
      query: gql`
        query Countries {
          countries {
            code
            name
            emoji
          }
        }
      `,
    });
  
    return {
      props: {
        countries: data.countries.slice(0, 10),
      },
    };
  }

  export default function Home({ countries }) {
      return (
        <div >
        {countries.map((country) => (
          <div key={country.code} >
            <h3>
                {country.name}
            </h3>
            <p>
              {country.code} - {country.emoji}
            </p>
          </div>
        ))}
      </div>
      )
  }