const Footer = ({ margin }) => {
  return (
    <div className={`grid place-items-center ${margin}`}>
      <p className="text-footer-text xsm:text-base text-sm">
        made with <span className="text-red-600">❤</span> by Monojit Sen
      </p>
    </div>
  );
};
export default Footer;
