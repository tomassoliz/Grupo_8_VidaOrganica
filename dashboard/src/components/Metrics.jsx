import { MetricItem } from './MetricItem';

const data = [
    {
      id: crypto.randomUUID(),
      color: "primary",
      title: "Productos en almacen",
      value: 650,
      icon: "fa-pencil",
    },
    {
      id: crypto.randomUUID(),
      color: "success",
      title: "Clientes registrados",
      value: 200,
      icon: "fa-user",
    },
    {
      id: crypto.randomUUID(),
      color: "warning",
      title: "Marcas",
      value: 100,
      icon: "fa-box",
    },
  ];

export const Metrics = () => {
  return (
    <div className="col-12">
      <div className="row">
        {data.map(({ color, title, value, icon, id }) => (
          <MetricItem
            key={id}
            color={color}
            title={title}
            value={value}
            icon={icon}
          />
        ))}
      </div>
    </div>
  )
}
