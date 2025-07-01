const { Firestore } = require("@google-cloud/firestore");

const firestore = new Firestore({
  projectId: "roit-rule-engine",
  databaseId: "workflow"
});

async function exec() {
  const snapshotOriginal = await firestore
    .collection("hom-n8n-workflow")
    .get();

  const files = getData(snapshotOriginal);
  // Filtra manualmente os arquivos onde algum nodes.parameters.client bate com o valor
  const filtered = files.filter(file =>
    Array.isArray(file.nodes) &&
    file.nodes.some(node => node.parameters && node.parameters.client === "46739d10f5b88176c3e9d605cf55fc2e")
  );
  const names = filtered.map(file => file.name);
  console.log(JSON.stringify(names, null, 2));
}
exec();

const getData = (snap) => {
    return snap.docs.map(doc => {
        const data = doc.data()
        data.id = doc.id
        return data
    })
}
