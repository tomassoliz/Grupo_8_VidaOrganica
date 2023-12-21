import { useEffect, useRef, useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Form,
  FormLabel,
} from "react-bootstrap";

import PropTypes from "prop-types";

import {
  createProduct,
  getBrands,
  getCategories,
  getSections,
  updateProduct,
} from "../services/products";

export const FormProduct = ({
  setProducts,
  formValues,
  setFormValues,
  products,
}) => {
  const [data, setData] = useState({
    brands: [],
    sections: [],
    categories: [],
    loading: true,
  });

  const imgPrev = useRef(null);
  const btnPrev = useRef(null);
  const inputImage = useRef(null);
  const [changeImage, setChangeImage] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        const sections = await getSections();
        const brands = await getBrands();
        const categories = await getCategories();

        if (!sections) throw new Error("Error al traer las secciones");
        if (!brands) throw new Error("Error al traer las marcas");
        if (!categories) throw new Error('Error al traer las categorías')

        if (sections.ok && brands.ok && categories.ok) {
          setData({
            ...data,
            sections: sections.data,
            brands: brands.data,
            categories: categories.data,
            loading: false,
          });
        }
      } catch (error) {
        console.error;
      }
    };
    getData();
  }, []);

  const handleInputChange = ({ target }) => {
    setFormValues({
      ...formValues,
      [target.name]:  target.value,
    });
  };

  const handleCleanForm = () => {
    setFormValues({
      name: "",
      price: 0,
      discount: 0,
      brandId: "",
      sectionId: "",
      categoryId: "",
      description: "",
      image: "",
    });
    btnPrev.current.classList.remove('fa-sync-alt');
    imgPrev.current.src = "/images/sin-imagen.png";
    setChangeImage(false)

  };

  const handleSubmitForm = async (event) => {
    event.preventDefault();

    if (formValues.id) {
      const result = await updateProduct(formValues, formValues.id);

      const productsUpdated = products.map((product) => {
        if (product.id === formValues.id) {
          product = result.data;
        }
        return product;
      });

      setProducts(productsUpdated);
    } else {
      const result = await createProduct(formValues);
      setProducts([...products, result.data]);
    }
    handleCleanForm();
  };

  const handleImagePrev = ({target}) => {
    setFormValues({
      ...formValues,
      [target.name]:  target.files[0],
    });

    setChangeImage(true)
    btnPrev.current.classList.add("fa-sync-alt")

   
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>{formValues.id ? "Editar" : "Agregar"} Producto</CardTitle>
      </CardHeader>
      <CardBody>
        <Form className="row" onSubmit={handleSubmitForm}>

          <div className="d-flex mb-3 col-12">
           
              <div
                className="mr-2 d-flex flex-column justify-content-center position-relative"
                style={{ height: "100px" }}
              >
                <img
                  src={changeImage? URL.createObjectURL(formValues.image) : formValues.id ? formValues.image : "/images/sin-imagen.png"}
                  alt=""
                  height={150}
                  width={100}
                  style={{objectFit:"cover"}}
                  ref={imgPrev}
                />
                <FormLabel
                  htmlFor="file"
                  className="rounded rounded-circle btn btn-sm btn-primary"
                  style={{
                    width: 32,
                    position: "absolute",
                    bottom: "-15px",
                    right: "-5px",
                    cursor: "pointer",
                  }}
                >
                  <i  ref={btnPrev} className={`fas ${formValues.id && formValues.image ? 'fa-sync-alt' : 'fa-plus' } `}></i>    
                  <input ref={inputImage} type="file" hidden id="file" name="image" onChange={handleImagePrev}/>

                </FormLabel>                  

              </div>
          </div>

            <Form.Group className="mb-3 col-12">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                name="name"
                onChange={handleInputChange}
                value={formValues.name}
              />
            </Form.Group>
          <Form.Group className="mb-3 col-12 col-md-6">
            <Form.Label>Precio</Form.Label>
            <Form.Control
              type="number"
              name="price"
              onChange={handleInputChange}
              value={formValues.price}
            />
          </Form.Group>
          <Form.Group className="mb-3 col-12 col-md-6">
            <Form.Label>Descuento</Form.Label>
            <Form.Control
              type="number"
              name="discount"
              onChange={handleInputChange}
              value={formValues.discount}
            />
          </Form.Group>
          <Form.Group className="mb-3 col-12">
            <Form.Label>Marca</Form.Label>
            <Form.Select
              className={`form-control`}
              name="brandId"
              onChange={handleInputChange}
            >
              {data.loading ? (
                <option hidden defaultValue>
                  Cargando...
                </option>
              ) : (
                <>
                  <option hidden defaultValue>
                    Seleccione...
                  </option>
                  {data.brands.map(({ id, name }) =>
                    formValues.brandId === id ? (
                      <option key={id} selected value={id}>
                        {name}
                      </option>
                    ) : (
                      <option key={id} value={id}>
                        {name}
                      </option>
                    )
                  )}
                </>
              )}
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3 col-12">
            <Form.Label>Sección</Form.Label>
            <Form.Select
              className={`form-control`}
              name="sectionId"
              onChange={handleInputChange}
            >
              <option hidden defaultValue>
                Selecciona la sección...
              </option>
              {data.sections &&
                data.sections.map(({ id, name }) =>
                  formValues.sectionId === id ? (
                    <option key={id} selected value={id}>
                      {name}
                    </option>
                  ) : (
                    <option key={id} value={id}>
                      {name}
                    </option>
                  )
                )}
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3 col-12">
            <Form.Label>Categoria</Form.Label>
            <Form.Select
              className={`form-control`}
              name="categoryId"
              onChange={handleInputChange}
            >
              <option hidden defaultValue>
                Selecciona la sección...
              </option>
              {data.categories &&
                data.categories.map(({ id, name }) =>
                  formValues.categoryId === id ? (
                    <option key={id} selected value={id}>
                      {name}
                    </option>
                  ) : (
                    <option key={id} value={id}>
                      {name}
                    </option>
                  )
                )}
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3 col-12">
            <Form.Label>Descripción</Form.Label>
            <Form.Control
              as="textarea"
              className={`form-control`}
              name="description"
              rows={4}
              onChange={handleInputChange}
              value={formValues.description}
              style={{ resize: "none" }}
            ></Form.Control>
          </Form.Group>

          <div className="d-flex justify-content-around w-100">
            <Button
              type="button"
              className="py-0"
              variant="outline-secondary"
              onClick={handleCleanForm}
            >
              Cancelar
            </Button>
            <Button type="submit" variant="outline-dark">
              Guardar
            </Button>
          </div>
        </Form>
      </CardBody>
    </Card>
  );
};
FormProduct.propTypes = {
  formValues: PropTypes.object,
  setFormValues: PropTypes.func,
  products: PropTypes.array,
  setProducts: PropTypes.func,
};

// aca va lo de los modelos de product