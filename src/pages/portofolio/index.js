import Layout from "../../components/layouts/Layout";

export default function portofolio() {
  return <Layout headerTop={true} activeNav={'Portofolio'}>
    <div className="portofolio container mx-auto">
      <div className="section-title">
        <h2>Portofolio</h2>
        <p>My Works</p>
      </div>
    </div>
  </Layout>
}