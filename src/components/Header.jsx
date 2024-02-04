

export const Header = () => {
    const isLogged = false;
    const greet = isLogged ? <p>Welcome</p> : <p>pls login</p>;
  return (
    <div>Header
    {greet}
    </div>
  );
};
