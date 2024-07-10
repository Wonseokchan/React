function PropsChild1(props) {
  //해당값이 없을 경우 오류 막기(?. / && / || / ??)
  const { name, id, list, info } = props;
  return (
    <div>
      <p>이름 : {name}</p>
      <p>아이디 : {id} </p>
      <p>목록 :</p>
      {list &&
        list.map((v, i) => {
          return <span key={i}>{v}</span>;
        })}
      <p>학교: {info.school}</p>
    </div>
  );
}
export default PropsChild1;
