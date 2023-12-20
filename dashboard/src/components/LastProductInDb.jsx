
export const LastProductInDb = () => {
    return (
      <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">
            Ultimo producto agregado
          </h5>
        </div>
        <div className="card-body">
          <div className="text-center">
            <img
              className="img-fluid px-3 px-sm-4 mt-3 mb-4"
              width="100%"
              src="/images/alfajor.jpg"
              alt=" Alfajor Happy Food "
            />
          </div>
          <p>
            Happy Food, alfajor de coco y dulce de leche sin tacc, alfajor con coco y relleno de dulce de leche cubierto con bao de reposteria. Alimento dietético. Libre de gluten. Bajo en sodio. Fuente de fibra. Sin adición de azúcares. Contenido neto 40 gramos
          </p>
          <a
            className="btn btn-danger"
            target="_blank"
            rel="nofollow"
            href="/"
          >
            Ver mas productos
          </a>
        </div>
      </div>
    </div>
    )
  }