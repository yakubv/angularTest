package com.angularTest.backend.api.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Table(name="books")
public class User {
    @Id
    @GeneratedValue
    private int id;
    private String title;
    private String pages;
    private String releasedate;
    private String isbn;
}
