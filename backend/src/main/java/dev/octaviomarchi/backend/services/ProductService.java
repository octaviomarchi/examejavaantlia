package dev.octaviomarchi.backend.services;

import dev.octaviomarchi.backend.dtos.ProductDTO;
import dev.octaviomarchi.backend.models.Product;
import dev.octaviomarchi.backend.repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ProductService {

    @Autowired
    ProductRepository productRepository;

    public List<ProductDTO> getProductsForDropdown() {
        List<Product> products = productRepository.findAll();
        List<ProductDTO> productDTOS = products.stream().map(ProductDTO::new).collect(Collectors.toList());
        return productDTOS;
    }
}