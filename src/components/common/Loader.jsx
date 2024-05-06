import { FadeLoader } from "react-spinners"

const Loader = () => {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#ffffff");

  return (
    <div className="sweet-loading">
      <FadeLoader
        color="#485c70"
        height={20}
        width={6}
      />
    </div>
  )
}

export default Loader