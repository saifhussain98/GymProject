package com.qa.gymproject.entity;

import org.junit.jupiter.api.Test;

import nl.jqno.equalsverifier.EqualsVerifier;

public class GymWorkoutIntegrationTest {
     @Test
     public void testEquals() {
         EqualsVerifier.simple().forClass(GymWorkout.class).verify();
     }
}