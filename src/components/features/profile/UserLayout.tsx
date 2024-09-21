type Props = {
  children: React.ReactNode;
};

const UserLayout = ({ children }: Props) => {
  return <div>user layout: {children}</div>;
};

export default UserLayout;
