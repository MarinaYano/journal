// const toJson = async (res) => {
//   const json = await res.json();
//   if(res.ok){
//       return json;
//   }else{
//       throw new Error(json.message);
//   }
// }

//日報一覧を取得
export const getDaily = async () =>{
  const res = await fetch('http://localhost:8000/daily/', {
      method: 'GET',
  })
  const data = await res.json();
  return data
}

//1日の詳細を取得
export const getDailyDetail = async (id: string) => {
  const res = await fetch(`http://localhost:8000/daily/${id}`, {
      method : 'GET',
  })
  const data = await res.json();
  return data
}

//カテゴリ別一覧を取得
export const getCategory = async (cat) => {
  const res = await fetch(`http://localhost:8000/daily/${cat}`, {
      method: 'GET',
  })
  const data = await res.json();
  return data
}