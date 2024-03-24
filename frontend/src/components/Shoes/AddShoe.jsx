import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { shoesURL, categoriesURL } from "../Common/EndPoints";
import axios from "axios";

export default function AddShoe() {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [successMsg, setSuccessMsg] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      category: "",
      price: 0,
      name: "",
      description: "",
      quantity: 1,
      image: ""
    },
  });
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(categoriesURL);
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  const onSubmit = async (data) => {
    try {
      await axios.post(shoesURL, data);
      setSuccessMsg("Shoe creation is successful.");
      reset();
      navigate("/shoes");
    } catch (error) {
      console.error("Error adding shoe:", error);
      setError(error.response.data.message);
    }
  };

  return (
    <div className="container">
      <h1>Add Shoe</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        {successMsg && <p className="success-msg">{successMsg}</p>}
        {error && <p className="error-msg">{error}</p>}
        <Form.Group className="mb-3" controlId="category">
          <Form.Label>Category</Form.Label>
          <Form.Select
            {...register("category", { required: "This is required" })}
            defaultValue=""
          >
            <option value="" disabled hidden>
              Select Category
            </option>
            {categories.map((category) => (
              <option key={category.code} value={category.code}>
                {category.description}
              </option>
            ))}
          </Form.Select>
          {errors.category && (
            <p className="errorMsg">{errors.category.message}</p>
          )}
        </Form.Group>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            {...register("name", { required: "This is required" })}
            placeholder="Name"
          />
          {errors.name && <p className="errorMsg">{errors.name.message}</p>}
        </Form.Group>
        <Form.Group className="mb-3" controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea" rows={3}
            {...register("description", { required: "This is required" })}
            placeholder="Description"
          />
          {errors.description && <p className="errorMsg">{errors.description.message}</p>}
        </Form.Group>
        <Form.Group controlId="image" className="mb-3">
        <Form.Label>Image</Form.Label>
        <Form.Control type="file" 
        {...register("image", { required: "This is required" })}
        placeholder="Image"
        />
        {errors.image && <p className="errorMsg">{errors.image.message}</p>}
      </Form.Group>
        <Form.Group className="mb-3" controlId="price">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="number"
            {...register("price", { required: "This is required", min: 0 })}
            placeholder="Price"
          />
          {errors.price && <p className="errorMsg">{errors.price.message}</p>}
        </Form.Group>
        <Form.Group className="mb-3" controlId="quantity">
          <Form.Label>Quantity</Form.Label>
          <Form.Control
            type="number"
            {...register("quantity", { required: "This is required", min: 0 })}
            placeholder="Quantity"
          />
          {errors.quantity && <p className="errorMsg">{errors.quantity.message}</p>}
        </Form.Group>
        <Button type="submit" variant="primary">
          Add Shoe
        </Button>
      </form>
    </div>
  );
}

// will be using mutate from uswr paackage const { mutate } = useSWRConfig()
