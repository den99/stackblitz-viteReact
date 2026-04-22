
import { FaFileDownload } from "react-icons/fa";
import { FaBeer } from "react-icons/fa";

export default function Download({ isbn }) {
  return (
    <a href={`https://wings.msn.to/index.php/-/A-07/${isbn}/`}>
      <FaFileDownload title="Sample Download" />
      
    </a>
  );
}