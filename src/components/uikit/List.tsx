interface ListProps {
  label: String;
  value: String;
}

const List = ({label, value}: ListProps) => {
  return (
    <div className="flex mt-4">
      <div className="mr-8">
        <div>{label}</div>
        <div className="text-sm text-gray-400">{value}</div>
      </div>
    </div>
  )
}

export default List;
